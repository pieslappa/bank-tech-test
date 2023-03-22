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
    this._balance += amount;
    const transaction = new Transaction(amount, this._balance);
    this._transactions.push(transaction);
  }

  withdraw(amount) {
    this._balance -= amount;
    const transaction = new Transaction(-amount, this._balance);
    this._transactions.push(transaction);
  }

  statement() {
    console.log(Statement.printStatement(this._transactions));
    return Statement.printStatement(this._transactions);
  }
}

module.exports = BankAccount;
