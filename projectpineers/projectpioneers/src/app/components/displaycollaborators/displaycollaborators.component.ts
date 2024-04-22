import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { Collaborator } from 'src/app/models/collaborator';
import { CollaboratorService } from '../../services/collaborator.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-displaycollaborators',
  templateUrl: './displaycollaborators.component.html',
  styleUrls: ['./displaycollaborators.component.css']
})
export class DisplaycollaboratorsComponent implements OnInit {

  filteredCollaborators: Collaborator[] = [];
  collaborators        : Collaborator[] = [];
  sub!                 : Subscription;
  errorMessage         : any;
  private _listFilter  : string = '';

  constructor(private collaboratorService: CollaboratorService, private router : Router) { } 
  
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log(value);
    this.filteredCollaborators = this.performFilter(value);
    console.log(this.collaborators);
  }


  performFilter(filterByName: string): Collaborator[] {
    filterByName = filterByName.toLocaleLowerCase();
    return this.collaborators.filter((collaborator: Collaborator) =>
    collaborator.firstName?.toLocaleLowerCase().includes(filterByName));
  }
  ngOnInit(): void {
    this.sub = this.collaboratorService.getCollaborators().subscribe({
      next: collaborators => {
        this.collaborators = collaborators;
        this.filteredCollaborators = this.collaborators;
      },
      error: err => this.errorMessage = err
    });
    console.log(this.collaborators);
  }

  /*displayDetails(){
    this.router.navigate(['/displayCollaboratorDetails']);
    console.log("click navigate")
  }*/
}
