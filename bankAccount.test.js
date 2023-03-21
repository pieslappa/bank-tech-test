const BankAccount = require("./bankAccount");

describe("Bank class", () => {
  let account;

  beforeEach(() => {
    account = new BankAccount();
  });

  it("has a balance", () => {
    expect(account.balance).toEqual(0);
  });

  it("can deposit money", () => {
    account.deposit(100);
    expect(account.balance).toEqual(100);
  });

  it("can withdraw money", () => {
    account.deposit(100);
    account.withdraw(50);
    expect(account.balance).toEqual(50);
  });
});
