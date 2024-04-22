import { Component, OnInit } from '@angular/core';
import { AccountingServiceService } from '../services/accounting-service.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-account-component',
  templateUrl: './account-component.component.html',
  styleUrls: ['./account-component.component.scss']
})
export class AccountComponentComponent implements OnInit {

  accountID = '';
  amount = 0;
  balance: number | undefined;
  account : string = '';

  constructor(private accountingService: AccountingServiceService,
    private data:DataService) {}

  createAccount(): void {
    try {
      this.accountingService.createAccount(this.accountID, this.amount);
      alert('Account created successfully!');
    } catch (error : any) {
      alert(error.message);
    }
  }
ngOnInit(): void {
    this.data.currentAccount.subscribe(account => this.account = account)
}
  
  topUp(): void {
    try {
      this.balance = this.accountingService.topUp(this.accountID, this.amount);
      alert('Top up successful!');
    } catch (error : any) {
      alert(error.message);
    }
  }
}
