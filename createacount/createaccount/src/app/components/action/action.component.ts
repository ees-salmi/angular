import { Component , HostListener,Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent {

  isContextMenuVisible = false;
  contextMenuPosition = { x: 0, y: 0 };
  @Output() clicked = new EventEmitter<void>();

  constructor() { }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.isContextMenuVisible = false;
  }

  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.isContextMenuVisible = true;
    this.contextMenuPosition = { x: event.clientX, y: event.clientY };
  }
  onClick(event: MouseEvent) {
    event.preventDefault(); // Prevent the default click behavior
    this.contextMenuPosition = { x: event.clientX, y: event.clientY };
    this.isContextMenuVisible = true;
  }

  handleMenuItemClick(option: string) {
    console.log('Clicked on:', option);
  }
  onEditClick() : void {
    this.clicked.emit();
  }

}
