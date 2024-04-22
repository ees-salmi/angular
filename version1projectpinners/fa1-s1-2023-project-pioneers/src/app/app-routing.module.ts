import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaycollaboratordetailsComponent } from './components/displaycollaboratordetails/displaycollaboratordetails.component';
import { DisplaycollaboratorsComponent } from './components/displaycollaborators/displaycollaborators.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RestitutionComponent } from './components/restitution/restitution.component';
import { UploadComponent } from './components/upload/upload.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},

  {path:'home', component:HomeComponent,
  children: [
    {path:'', redirectTo:'collaborators', pathMatch:'full'},
    {path:'collaborators', component:DisplaycollaboratorsComponent},
    {path:'displayCollaboratorDetails/:id', component:DisplaycollaboratordetailsComponent},
    {path:'upload', component:UploadComponent},
    {path:'restitution', component:RestitutionComponent},
  ]},

 

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
