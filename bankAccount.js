const Transaction = require("./transaction");
const Statement = require("./statement");

class BankAccount {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  get balance() {
    return this._balance;
  }

  deposit(amount) {
    const transaction = new Transaction(amount, this._balance);
    this._transactions.push(transaction);
    this._balance += amount;
  }

  withdraw(amount) {
    const transaction = new Transaction(-amount, this._balance);
    this._transactions.push(transaction);
    this._balance -= amount;
  }

  statement() {
    return Statement.printStatement(this._transactions);
  }
}

module.exports = BankAccount;
