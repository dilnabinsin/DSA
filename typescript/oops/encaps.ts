class Account {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const acc = new Account(1000);
acc.deposit(500);
console.log(acc.getBalance()); // 1500
