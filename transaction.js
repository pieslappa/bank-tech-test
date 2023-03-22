class Transaction {
  constructor(amount, type, date) {
    this.amount = amount;
    this.type = type;
    this.date = this.constructor.getCurrentDate();
  }

  static getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${day}-${month}-${year}`;
  }
}

module.exports = Transaction;
