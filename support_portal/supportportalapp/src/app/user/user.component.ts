import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { NotificationService } from '../service/notification.service';
import { NotificationType } from '../enum/notification-type.enum';
import { HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CustomHttpRespone } from '../model/custom-http-response';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
//import { FileUploadStatus } from '../model/file-upload.status';
import { Role } from '../enum/role.enum';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  private titleSubject = new BehaviorSubject<string>('Users');
  public titleAction$ = this.titleSubject.asObservable();
  public users : User[] = [] ;
  public refreshing : boolean = false;
  private subscriptions: Subscription[] = [];
  public selectedUser? : User ;
  public fileName: string = "";
  public profileImage: any ;
  public inputValue : string = "" ;
  public updatedUser? : User ;
  public editUser: User = new User();
  public currentUsername: string = "";

  constructor(private router: Router, private authenticationService: AuthenticationService,
              private userService: UserService, private notificationService : NotificationService) {
                
              }


  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.getUsers(true);
  }

  public changeTitle(title : string) : void{
    this.titleSubject.next(title);
  }

  public getUsers(showNotification : boolean) : void {
    this.refreshing = true;
    this.subscriptions.push(
      this.userService.getUsers().subscribe(
        (response ) => {
          this.userService.addUsersToLocalCache(response);
          this.users = response ;
          this.refreshing = false ;
          if(showNotification){
            this.sendNotification(NotificationType.SUCCESS, `${response.length} users are loaded successfly`);
          }
        },
        (errorResponse : HttpErrorResponse) => {
          this.sendNotification(NotificationType.ERROR, `${errorResponse.error.message}`);
          this.refreshing = false ;
        }
      )
    )
  }

  private sendNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }

  public selectUser(selectedUser : User) : void {
    this.selectedUser = selectedUser ;
    document.getElementById("openUserInfo")?.click();
  }

  public onProfileImageChange(event : any) : void {
    this.fileName = event.target.files[0].name ;
    this.profileImage = event.target.files[0] ;
    console.log(event.target.files[0] );

  }

  public saveNewUser() : void {
    document.getElementById("new-user-save")?.click();
  }

  public onAddNewUser(userForm : NgForm): void {
    const formData = this.userService.createUserFormDate("admin", userForm.value, this.profileImage);
    this.subscriptions.push(
      this.userService.updateUser(formData).subscribe(
        (response : User) => {
          this.clickButton("new-user-close");
          this.getUsers(false) ;
          this.refreshing = false ;
          this.fileName = "" ;
          this.profileImage = "";
          userForm.reset();
          this.sendNotification(NotificationType.SUCCESS, `${response.firstName} ${response.lastName} is added successfly`);
          
        },
        (errorResponse : HttpErrorResponse) => {
          this.sendNotification(NotificationType.ERROR, `${errorResponse.error.message}`);
          this.refreshing = false ;
        }
      )
    )

  }

  public clickButton(buttonId : string) : void {
    document.getElementById(buttonId)?.click();
  }

public searchUser(searchTerm : string) : void {
  
  
    let filteredUsers : User[] = [] ;
    for(const user of this.users){
      if(user.firstName.toLowerCase().indexOf(searchTerm) != -1){
        filteredUsers.push(user);
      }
      
    }
    this.users = filteredUsers;
    if(searchTerm.length === 0 || !searchTerm){
      this.users = this.userService.getUsersFromLocalCache();
    }

    //to add when deleting from the input the results is not reversible
}

public searchUsers(searchTerm: string): void {
  const results: User[] = [];
  for (const user of this.userService.getUsersFromLocalCache()) {
    if (user.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        user.lastName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        user.username.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        user.userId.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
        results.push(user);
    }
  }
  this.users = results;
  if (results.length === 0 || !searchTerm) {
    this.users = this.userService.getUsersFromLocalCache();
  }
}

public onUpdateUser(): void {
  const formData = this.userService.createUserFormDate(this.currentUsername, this.editUser, this.profileImage);
  this.subscriptions.push(
    this.userService.updateUser(formData).subscribe(
      (response: User) => {
        this.clickButton('closeEditUserModalButton');
        this.getUsers(false);
        this.fileName = "";
        this.profileImage = null;
        this.sendNotification(NotificationType.SUCCESS, `${response.firstName} ${response.lastName} updated successfully`);
      },
      (errorResponse: HttpErrorResponse) => {
        this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
        this.profileImage = null;
      }
    )
    );
}

public onEditUser(editUser: User): void {
  this.editUser = editUser;
  this.currentUsername = editUser.username;
  this.clickButton('openUserEdit');
}
  

}
