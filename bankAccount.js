class BankAccount {
  constructor() {
    this._balance = 0;
  }

  get balance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    this._balance -= amount;
  }
}

module.exports = BankAccount;
