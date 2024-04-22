import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Collaborator } from 'src/app/models/collaborator';
import { CollaboratorService } from '../../services/collaborator.service';

@Component({
  selector: 'app-displaycollaboratordetails',
  templateUrl: './displaycollaboratordetails.component.html',
  styleUrls: ['./displaycollaboratordetails.component.css']
})
export class DisplaycollaboratordetailsComponent implements OnInit {
 

  collaborator?        : Collaborator
  sub!                 : Subscription;
  errorMessage         : any;

  constructor(private collaboratorService: CollaboratorService, private router : ActivatedRoute) { } 

  ngOnInit(): void {
    const paramValue = Number(this.router.snapshot.paramMap.get('id'));
    console.log(paramValue);
    this.sub = this.collaboratorService.getCollaboratorById(paramValue).subscribe({
      next: collab => {
        this.collaborator = collab  ;
        this.collaborator = collab  ;
      },
      error: err => this.errorMessage = err
    });
    
  }

  calculedate(date : Date): Number {
      return Number(date.getDay());
  }

 
  /* collaborator : Collaborator[] = [];
  errorMessage  : any;
  constructor(private collaboratorService: CollaboratorService, private route : ActivatedRoute) { }
 
  ngOnInit(): void {
  //const id = Number(this.route.snapshot.paramMap.get("id"));
  //console.log(id);
  
  this.collaboratorService.getCollaboratorById(1234).subscribe({
  next: collab => {
    console.log(collab);
    
  this.collaborator?.push(collab);
  console.log();
  
  
  },
  error: err => this.errorMessage = err
  });*/
}









/*{
    globalGroupId: 1234,
    firstName: "essalmi",
    lastName: "elmustapha",
    email: "test@gmail.com",
    officeBase: "test@gmail.com",
    birthday: new Date(23,11,2022),
    status: "elmustapha",
    classification: "elmustapha",
    groupGrade: "elmustapha",
    localGrade: "elmustapha",
    puCode: "elmustapha",
    jobTitle: "elmustapha",
    typeContrat: "elmustapha",
    projectName: "elmustapha",
    joiningDate:new Date(23,11,2022)};*/

