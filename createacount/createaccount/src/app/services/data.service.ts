import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Status, Task } from 'src/core/types/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private account = new BehaviorSubject<string>("default acount");
  currentAccount = this.account.asObservable();
  
  constructor(private http: HttpClient) {}

  changeAccount(account : string){
    this.account.next(account);
  }

  getTasks() : Observable<Task[]>{
    return this.http.get<any>('https://api.example.com/data');
  }
}
