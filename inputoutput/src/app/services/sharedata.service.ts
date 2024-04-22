import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  private data  = new Subject<number>();;
  constructor() {

   }

  updateData(newData: number) {
    this.data.next(newData);
  }

  getData() : Observable<number>{
    return this.data.asObservable();
  }
}
