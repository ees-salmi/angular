import { HttpClient } from '@angular/common/http';
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

  collab!: any;
  collabUrlId =  'http://localhost:8080/collaborators/getCollaborators/';
  
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const collaboratorId = params['id'];
      this.http.get(this.collabUrlId + collaboratorId).subscribe((data) => {
        this.collab = data;
      });
    });
    console.log(this.collab);
    
  }
 
  
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

