import { Component } from '@angular/core';
import { Status, Task } from 'src/core/types/interfaces';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {


  title : string = '';
  desc  : string = '';
  createdDate : Date = new Date();
   tickets  = [
    { id: 1, name: 'Ticket 1 t do ',description:'description of the ticket', status: 'To Do' },
    { id: 2, name: 'Ticket 2 p',description:'description of the ticket', status: 'In Progress' },
    { id: 3, name: 'Ticket 3 dn',description:'description of the ticket', status: 'Done' },
    { id: 4, name: 'Ticket 4 tdo',description:'description of the ticket', status: 'To Do' },
    { id: 5, name: 'Ticket 5 tdo',description:'description of the ticket', status: 'To Do' },
    { id: 6, name: 'Ticket 6 pro',description:'description of the ticket', status: 'In Progress' },
    { id: 7, name: 'Ticket 7 dn',description:'description of the ticket', status: 'Done' },
    { id: 8, name: 'Ticket 8 tdo',description:'description of the ticket', status: 'To Do' },
    { id: 9, name: 'Ticket 9 prog',description:'description of the ticket', status: 'In Progress' },
    { id: 10, name: 'Ticket 10 dn',description:'description of the ticket', status: 'Done' },
    // Add more tickets as needed
];
  isActionsHidden : boolean = true;
profileOptions : string[] = ["essalmi","elmouhi"];

description : string = "this is a task to complete for tomorrow should complete the description of tha java 17 and java 11 and you should alsi see kafka"

currentTicket : any;

filterTickets(status:string){
  return this.tickets.filter(ticket => ticket.status == status);
}
onDragStart( ticket:any){
  this.currentTicket = ticket;
  console.log('on drag');
}

onDrop(event:DragEvent,status:string){
  console.log('on drop');
  event.preventDefault();
  const draggableTicket = this.tickets.find(ticket => ticket.id == this.currentTicket.id);
  if(draggableTicket != undefined){
    draggableTicket.status=status;
  }
  this.currentTicket = null ;
}

onDragOver(event:DragEvent){
  console.log('on drag over');
  event.preventDefault();
}

addTask(){
  let task = {} as Task;
  task.id = 12;
  task.name = this.title;
  task.status = Status.ToDo;
 // this.tickets.push(task);
}
showAction(event : MouseEvent) : void{
  this.isActionsHidden = false ;
}

}