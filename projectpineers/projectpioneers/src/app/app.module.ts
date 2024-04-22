import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaycollaboratorsComponent } from './components/displaycollaborators/displaycollaborators.component';
import { DisplaycollaboratordetailsComponent } from './components/displaycollaboratordetails/displaycollaboratordetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import   { CollaboratorService } from './services/collaborator.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplaycollaboratorsComponent,
    DisplaycollaboratordetailsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    NgbModule ,
    HttpClientModule,
    FormsModule

  ],
  providers: [CollaboratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
