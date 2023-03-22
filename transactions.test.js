const Transaction = require("./Transaction");

// Mock the Date constructor to return a fixed date
global.Date = jest.fn(() => ({
  getFullYear: () => 2022,
  getMonth: () => 3,
  getDate: () => 22,
}));

describe("Transaction class", () => {
  describe("constructor", () => {
    it("should create a new Transaction object with the correct amount, type and date", () => {
      // Create a new Transaction object
      const transaction = new Transaction(100, "deposit");
      // Check that the object has the correct properties
      expect(transaction).toEqual({
        amount: 100,
        type: "deposit",
        date: "22-04-2022",
      });
    });
  });

  describe("getCurrentDate", () => {
    it("should return the current date in the correct format", () => {
      // Create a new Transaction object
      const transaction = new Transaction(100, "deposit");
      // Call the getCurrentDate method
      const currentDate = transaction.getCurrentDate();
      // Check that the date is in the correct format
      expect(currentDate).toBe("22-04-2022");
    });
  });
});