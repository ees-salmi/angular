import { Component } from '@angular/core';
import { SharedataService } from '../services/sharedata.service';

@Component({
  selector: 'app-item-detail2',
  template: `<input type="text" [(ngModel)]="results"  id="item-input2" #valuetwo>
      <button type="button"  (click)="change()">click to change 1</button>`,
  styleUrls: ['./item-detail2.component.css']
})
export class ItemDetail2Component {
  
  results!   : number ;
  value     : string = 'test';
  constructor(private shareDataService: SharedataService) {
  }

  ngOnInit() {
    this.shareDataService.getData().subscribe(newData => this.results = newData);
  }

  change(): void{
    
  }

}
