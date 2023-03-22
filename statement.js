class Statement {
  // Refactored statement to only take transactions as an argument
  // to avoid calculating balance in the statement class
  static printStatement(transactions) {
    const header = "date || credit || debit || balance";
    const rows = transactions.map(({ date, amount, balance }) => {
      let credit = "";
      let debit = "";
      if (amount > 0) {
        credit = amount.toFixed(2);
      } else {
        debit = Math.abs(amount).toFixed(2);
      }
      return `${date} || ${credit} || ${debit} || ${balance.toFixed(2)}`;
    });
    return header + (rows.length > 0 ? "\n" + rows.reverse().join("\n") : "");
  }
}

module.exports = Statement;
