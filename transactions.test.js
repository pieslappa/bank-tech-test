const Transaction = require("./Transaction");
let mockDate;
// Mock the Date constructor to return a fixed date
beforeAll(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date("2023-03-22T10:20:30Z"));
});

afterAll(() => {
  jest.useRealTimers();
});

describe("Transaction class", () => {
  describe("constructor", () => {
    it("should create a new Transaction object with the correct amount, type and date", () => {
      // Create a new Transaction object
      const transaction = new Transaction(100);
      // Check that the object has the correct properties
      expect(transaction).toEqual({
        amount: 100,
        balance: 100,
        date: "22/03/2023",
      });
    });
  });

  describe("getCurrentDate", () => {
    it("should return the current date in the correct format", () => {
      // Create a new Transaction object
      const transaction = new Transaction(100);
      // Check that the date is in the correct format
      expect(transaction.date).toBe("22/03/2023");
    });
  });
});
