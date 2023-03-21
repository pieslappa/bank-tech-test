const Transaction = require("./Transaction");

describe("Transaction class", () => {
  it("has a date", () => {
    const transaction = new Transaction(100, "credit");
    expect(transaction.date).toBeDefined();
  });
});
