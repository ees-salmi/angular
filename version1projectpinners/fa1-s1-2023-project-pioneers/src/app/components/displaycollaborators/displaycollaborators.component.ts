import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { Collaborator } from 'src/app/models/collaborator';
import { Router } from '@angular/router';
import { CollaboratorService } from '../../services/collaborator.service';
import { HeaderService } from '../../services/header.service';


@Component({
  selector: 'app-displaycollaborators',
  templateUrl: './displaycollaborators.component.html',
  styleUrls: ['./displaycollaborators.component.css']
})
export class DisplaycollaboratorsComponent implements OnInit {

  
  collaborators        : Collaborator[] = [];
  filteredCollaborators: Collaborator[] = this.collaborators;
  sub!                 : Subscription;
  errorMessage         : any;

  constructor(private collaboratorService: CollaboratorService, private router : Router, private headerService: HeaderService) { } 



  ngOnInit(): void {
    this.sub = this.collaboratorService.getCollaborators()
                                       .subscribe({
                                              next: collaborators => {
                                              this.collaborators = collaborators;
                                              this.filteredCollaborators = this.collaborators;
      },
      error: err => this.errorMessage = err
    });
    console.log(this.collaborators);

    this.headerService.getSearchValue().subscribe((value) => {
      const search = value.toLowerCase();
      this.filteredCollaborators = this.collaborators.filter((collaborators) =>
        collaborators.lastName.toLowerCase().includes(search)
      );
    });
  }

  displayDetails(){
    this.router.navigate(['/home/displayCollaboratorDetails']);
  }
}
