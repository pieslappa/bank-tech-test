const BankAccount = require("./bankAccount");

describe("Bank class", () => {
  let account;

  beforeEach(() => {
    account = new BankAccount();
  });

  it("has a balance", () => {
    expect(account.balance).toEqual(0);
  });

  describe("deposit", () => {
    it("throws an error if the user does not enter a number", () => {
      expect(() => {
        account.deposit("hello");
      }).toThrow("Please enter a number");
    });

    it("allows a user to deposit a positive amount", () => {
      account.deposit(100);
      expect(account.balance).toEqual(100);
      expect(account._transactions).toHaveLength(1);
    });

    it("does not allow a user to deposit a negative amount", () => {
      expect(() => {
        account.deposit(-100);
      }).toThrow("Cannot deposit a negative amount");
    });
  });

  describe("withdraw", () => {
    it("throws an error if the user does not enter a number", () => {
      expect(() => {
        account.deposit("hello");
      }).toThrow("Please enter a number");
    });

    it("allows a user to withdraw a positive amount", () => {
      account.deposit(100);
      account.withdraw(50);
      expect(account.balance).toEqual(50);
      expect(account._transactions).toHaveLength(2);
    });

    it("does not allow a user to withdraw more than they have", () => {
      expect(() => {
        account.deposit(100);
        account.withdraw(200);
      }).toThrow("Not enough money in account");
    });

    it("does not allow a user to withdraw a negative amount", () => {
      expect(() => {
        account.deposit(100);
        account.withdraw(-100);
      }).toThrow("Cannot withdraw a negative amount");
    });
  });

  it("can print a statement when transactions have occurred", () => {
    account.deposit(1000);
    account.withdraw(100);
    account.deposit(500);
    expect(account.statement()).toEqual(
      "date || credit || debit || balance\n" +
        "22/03/2023 || 500.00 ||  || 1400.00\n" +
        "22/03/2023 ||  || 100.00 || 900.00\n" +
        "22/03/2023 || 1000.00 ||  || 1000.00"
    );
  });

  it("can print a statement when no transactions have occurred", () => {
    expect(account.statement()).toEqual("date || credit || debit || balance");
  });
});
