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
    expect(account._balance).toEqual(100);
    expect(account._transactions).toHaveLength(1);
  });

  it("can withdraw money", () => {
    account.deposit(100);
    account.withdraw(50);
    expect(account.balance).toEqual(50);
  });

  it("can print a statement", () => {
    account.deposit(1000);
    account.withdraw(100);
    account.deposit(500);
    console.log(account.statement());
    expect(account.statement()).toEqual(
      "date || credit || debit || balance\n" +
        "22/03/2023 || || 100.00 || 900.00\n" +
        "22/03/2023 || 500.00 || || 1000.00\n" +
        "22/03/2023 || 1000.00 || || 1000.00"
    );
  });
});
