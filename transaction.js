class Transaction {
  constructor(amount, balance, txDate) {
    this.amount = amount;
    this.balance = balance ? balance : amount;
    this.date = this.constructor.getCurrentDate(txDate);
  }

  static getCurrentDate(txDate) {
    const date = txDate === undefined ? new Date() : new Date(txDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${day}/${month}/${year}`;
  }
}

module.exports = Transaction;
