const Transaction = require("./Transaction");

// Mock the Date constructor to return a fixed date
beforeAll(() => {
  mockDate = jest
    .spyOn(global.Date, "now")
    .mockImplementation(() => new Date("2023-03-22"));
});

afterAll(() => {
  mockDate.mockRestore();
});

describe("Transaction class", () => {
  describe("constructor", () => {
    it("should create a new Transaction object with the correct amount, type and date", () => {
      // Create a new Transaction object
      const transaction = new Transaction(100, "deposit");
      // Check that the object has the correct properties
      expect(transaction).toEqual({
        amount: 100,
        type: "deposit",
        date: "22-03-2023",
      });
    });
  });

  describe("getCurrentDate", () => {
    it("should return the current date in the correct format", () => {
      // Create a new Transaction object
      const transaction = new Transaction(100, "deposit");
      // Call the getCurrentDate method
      console.log(transaction.date);
      // Check that the date is in the correct format
      expect(transaction.date).toBe("22-03-2023");
    });
  });
});
