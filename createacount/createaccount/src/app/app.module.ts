import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponentComponent } from './account-component/account-component.component';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { TasksComponent } from './tasks/tasks.component';
import { TicketComponent } from './tasks/ticket/ticket.component';
import { TransformDatePipe } from './pipes/transform-date.pipe';
import { ActionComponent } from './components/action/action.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponentComponent,
    AccountProfileComponent,
    TasksComponent,
    TicketComponent,
    TransformDatePipe,
    ActionComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
