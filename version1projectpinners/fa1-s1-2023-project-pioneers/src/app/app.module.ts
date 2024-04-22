import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UploadComponent } from './components/upload/upload.component';
import { RestitutionComponent } from './components/restitution/restitution.component';
import { HttpClientModule } from '@angular/common/http';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DisplaycollaboratordetailsComponent } from './components/displaycollaboratordetails/displaycollaboratordetails.component';
import { DisplaycollaboratorsComponent } from './components/displaycollaborators/displaycollaborators.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    UploadComponent,
    DisplaycollaboratordetailsComponent,
    DisplaycollaboratorsComponent,
    RestitutionComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule ,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS 
    ButtonModule,
    TieredMenuModule,
    MenubarModule,
    CardModule,
    ChipModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
