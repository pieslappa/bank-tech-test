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
    if (typeof amount !== "number") {
      throw new Error("Please enter a number");
    }
    if (amount < 0) {
      throw new Error("Cannot deposit a negative amount");
    }

    this._balance += amount;
    const transaction = new Transaction(amount, this._balance);
    this._transactions.push(transaction);
  }

  withdraw(amount) {
    if (typeof amount !== "number") {
      throw new Error("Please enter a number");
    }
    if (amount > this._balance) {
      throw new Error("Not enough money in account");
    }
    if (amount < 0) {
      throw new Error("Cannot withdraw a negative amount");
    }

    this._balance -= amount;
    const transaction = new Transaction(-amount, this._balance);
    this._transactions.push(transaction);
  }

  statement() {
    return Statement.printStatement(this._transactions);
  }
}

module.exports = BankAccount;
