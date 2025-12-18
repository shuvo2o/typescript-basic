class BankAcount {
  public accountName: string;
  private balance: number;
  protected accountType: string;

  constructor(name: string, amount: number) {
    this.accountName = name;
    this.balance = amount;
    this.accountType = "Savings";
  }
  public showBalence() {
    console.log(`Your Balance is ${this.balance}`);
  }
}
const account1 = new BankAcount("Shuvo", 1000);
account1.showBalence();
const ac1 =account1.accountName
console.log(ac1)