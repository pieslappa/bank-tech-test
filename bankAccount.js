const Transaction = require("./Transaction");

class BankAccount {
  constructor() {
    this._balance = 0;
    this.transactions = [];
  }

  get balance() {
    return this._balance;
  }

  deposit(amount) {
    const transaction = new Transaction(amount, "credit");
    this.transactions.push(transaction);
    this._balance += amount;
  }

  withdraw(amount) {
    this._balance -= amount;
  }
}

module.exports = BankAccount;
