import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CustomHttpRespone } from '../model/custom-http-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host : string = "http://localhost:8081";
  constructor(private http: HttpClient) {}

  getUsers() : Observable<User[]>{

    return this.http.get<User[]>(`${this.host}/user/list`);
  }

  addUser(formData : FormData) : Observable<User>{
    // i removed this from User | HttpErrorResponse
    return this.http.get<User>(`${this.host}/user/add`);
  }

  updateUser(formData : FormData) : Observable<User>{
    // i removed this from User | HttpErrorResponse
    return this.http.post<User>(`${this.host}/user/update`,formData);
  }

  resetPassword(email : string) : Observable<CustomHttpRespone | HttpErrorResponse>{

    return this.http.get<CustomHttpRespone>(`${this.host}/user/resetpassword/${email}`);
  }
  
  updateProfileImage(formData: FormData): Observable<HttpEvent<User>> {
    return this.http.post<User>(`${this.host}/user/updateProfileImage`, formData,
    {reportProgress: true,
      observe: 'events'
    });
  }

  deleteUser(username: string): Observable<CustomHttpRespone> {
    return this.http.delete<CustomHttpRespone>(`${this.host}/user/delete/${username}`);
  }

  addUsersToLocalCache(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }

  getUsersFromLocalCache(): User[] {
    if (localStorage.getItem('users')) {
        return JSON.parse(localStorage.getItem('users')  || '{}' );
    }
    return [];
  }

  createUserFormDate(loggedInUsername: any, user: User, profileImage: File): FormData {
    const formData = new FormData();
    formData.append('currentUsername', loggedInUsername);
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('username', user.username);
    formData.append('email', user.email);
    formData.append('role', user.role);
    formData.append('profileImage', profileImage);
    formData.append('isActive', JSON.stringify(user.active));
    formData.append('isNonLocked', JSON.stringify(user.notLocked));
    return formData;
  }

}
