import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { SharedataService } from '../services/sharedata.service';
@Component({
  selector: 'app-item-detail',
  template: `<input type="text" [(ngModel)]="results" id="item-input1" #valueone>
              <button type="button"  (click)="change()">change value</button>`,
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {

  results   : number = 0;
  value     : string = 'test';
  constructor(private shareDataService: SharedataService) {
  }
  
  @Output() newItemEvent = new EventEmitter<number>();

  ngOnChanges(): void { 
  }
  addNewItem(value1: any, value2: any) {
    this.results = Number(value1) + Number(value2);
    this.newItemEvent.emit(this.results);
  }

  @Input() item = ''; // decorate the property with @Input()


change(): void{
  this.shareDataService.updateData(this.results);
  console.log(this.results)

}

}
