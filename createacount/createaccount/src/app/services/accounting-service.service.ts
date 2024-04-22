import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountingServiceService {

   accountsWithBalance: Map<string, number>  ;
   constructor() {
    this.accountsWithBalance = new Map();
  }

  createAccount(accountID: string,amount : number): IterableIterator<[string, number]> {
    if (this.accountsWithBalance.has(accountID)) {
      throw new Error('ACCOUNT_EXISTS');
    }
    this.accountsWithBalance.set(accountID, amount);
    return this.accountsWithBalance.entries();
  }
  topUp(accountID: string, amount: number): number {
    if (!this.accountsWithBalance.has(accountID)) {
      throw new Error('ACCOUNT_DOES_NOT_EXIST');
    }
    let balance;
    balance = Number(this.accountsWithBalance.get(accountID)) + amount;

    this.accountsWithBalance.set(accountID,balance);
    return balance;
  }

  //listing all accounts
  listaccounts() : Map<string, number>{
    return this.accountsWithBalance;
  }
}
