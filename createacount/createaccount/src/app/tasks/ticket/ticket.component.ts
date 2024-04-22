import { Component, Input } from '@angular/core';
import { Status, Task } from 'src/core/types/interfaces';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {

  @Input() title : string = '';
  @Input() description  : string = '';
  @Input() createdDate : Date = new Date();
  @Input() isHidden : boolean = true;
           isEditing: boolean = false;
           newTitle: string = this.title;
           newDescription: string = this.description;
           newDate: Date = this.createdDate;

currentTicket : any;

onDragStart( ticket:any){
  this.currentTicket = ticket;
  console.log('on drag');
}

  toggleEdit() {
    if (this.isEditing) {
      // Save changes
      this.title = this.newTitle;
      this.description = this.newDescription;
      this.createdDate = this.newDate;
    } else {
      // Switch to edit mode
      this.newTitle = this.title;
      this.newDescription = this.description;
      this.newDate = this.createdDate;
    }
    this.isEditing = !this.isEditing;
  }
  onEditClicked() : void{
      this.isEditing = true;
  }

}
