const BankAccount = require("./bankAccount");

describe("Bank class", () => {
  let account;

  beforeEach(() => {
    account = new BankAccount();
  });

  it("has a balance", () => {
    expect(account.balance).toEqual(0);
  });
});
