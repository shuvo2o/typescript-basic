"use strict";
class BankAcount {
    constructor(name, amount) {
        this.accountName = name;
        this.balance = amount;
        this.accountType = "Savings";
    }
    showBalence() {
        console.log(`Your Balance is ${this.balance}`);
    }
}
const account1 = new BankAcount("Shuvo", 1000);
account1.showBalence();
const ac1 = account1.accountName;
console.log(ac1);
