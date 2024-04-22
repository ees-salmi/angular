import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentItem = 'Television';
  items = ['item1', 'item2', 'item3', 'item4'];
  results : number = 0;
  
  addItem(newItem: string) {
    this.items.push(newItem);
  }
  changeResultas(results : number): void {

    this.results = results;

  }
  sendMessage(): void {
    
  }
}
