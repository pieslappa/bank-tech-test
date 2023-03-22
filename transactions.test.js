const { beforeEach, describe } = require("node:test");
const Transaction = require("./Transaction");
let mockDate;
// Mock the Date constructor to return a fixed date
beforeAll(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date("2023-03-22"));
});

afterAll(() => {
  jest.useRealTimers();
});

describe("Transaction class", () => {
  describe("constructor", () => {
    describe("should create a new Transaction object", () => {
      it("when all arguments are passed", () => {
        // Create a new Transaction object
        const transaction = new Transaction(100, 100);
        // Check that the object has the correct properties
        console.log(transaction);
        expect(transaction).toEqual({
          amount: 100,
          balance: 100,
          date: "22/03/2023",
        });
      });

      it("should create a new Transaction object when no date or balance are passed", () => {
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
  });

  describe("getCurrentDate", () => {
    it("should return the passed date in the correct format", () => {
      // Create a new Transaction object
      const transaction = new Transaction(100, 100, "2023/03/21");
      // Check that the date is in the correct format
      expect(transaction.date).toBe("21/03/2023");
    });

    it("should return todays date if date is undefined", () => {
      // Create a new Transaction object
      const transaction = new Transaction(100, 100);
      // Check that the date is in the correct format
      expect(transaction.date).toBe("22/03/2023");
    });
  });
});
