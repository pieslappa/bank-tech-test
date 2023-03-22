class Statement {
  static printStatement(transactions, balance) {
    let header;
    header = "date || credit || debit || balance";
    transactions.length === 0 ? header + "\n" : header;
    const rows = transactions.map((transaction) => {
      const amount = transaction.amount.toFixed(2);
      const date = transaction.date;
      const credit = transaction.type === "credit" ? amount : "";
      const debit = transaction.type === "debit" ? amount : "";
      const balance = transaction.balance.toFixed(2);
      return `${date} || ${credit} || ${debit} || ${balance}`;
    });
    return header + rows.reverse().join("\n");
  }
}

module.exports = Statement;
