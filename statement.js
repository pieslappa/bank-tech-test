class Statement {
  // Refactored statement to only take transactions as an argument
  // to avoid calculating balance in the statement class
  static printStatement(transactions) {
    const header = "date || credit || debit || balance";
    const rows = transactions.reverse().map(({ date, amount, balance }) => {
      let credit = "";
      let debit = "";
      if (amount > 0) {
        credit = amount.toFixed(2);
      } else {
        debit = Math.abs(amount).toFixed(2);
      }
      const paddedBalance = balance !== undefined ? balance.toFixed(2) : "";
      console.log(paddedBalance);
      return `${date} || ${credit} || ${debit} || ${paddedBalance}`;
    });
    return header + (rows.length > 0 ? "\n" + rows.join("\n") : "");
  }
}

module.exports = Statement;
