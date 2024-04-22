import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaycollaboratordetailsComponent } from './components/displaycollaboratordetails/displaycollaboratordetails.component';
import { DisplaycollaboratorsComponent } from './components/displaycollaborators/displaycollaborators.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'displayCollaborators', component: DisplaycollaboratorsComponent },
  { path: 'displayCollaboratorDetails/:id', component: DisplaycollaboratordetailsComponent },
  { path: '**', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
