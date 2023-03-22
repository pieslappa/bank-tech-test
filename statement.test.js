const Statement = require("./statement");

describe("Statement class", () => {
  it("can print a statement when no transactions have occurred", () => {
    expect(Statement.printStatement([], 0)).toEqual(
      "date || credit || debit || balance"
    );
  });

  it("can print a statement when transactions have happened", () => {
    const balance = 2500;
    const transactions = [
      { date: "10/01/2012", amount: 1000, type: "credit", balance: 1000 },
      { date: "13/01/2012", amount: 2000, type: "credit", balance: 3000 },
      { date: "14/01/2012", amount: 500, type: "debit", balance: 2500 },
    ];
    expect(Statement.printStatement(transactions, balance)).toEqual(
      "date || credit || debit || balance\n14/01/2012 ||  || 500.00 || 2500.00\n13/01/2012 || 2000.00 ||  || 3000.00\n10/01/2012 || 1000.00 ||  || 1000.00"
    );
  });
});
