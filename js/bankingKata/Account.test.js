const Account = require("./Account");

describe("Bank account", () => {
  Date.now = jest.fn(() => 1555356213674);

  describe("Account", () => {
    it("creates a bank account with initial balance of $0", () => {
      const account = new Account();
      expect(account.balance).toBe(0);
    });

    it("creates a bank accounts with initial balance of $100", () => {
      const account = new Account(100);
      expect(account.balance).toBe(100);
    });

    it("creates two bank accounts with different initial balances", () => {
      const account1 = new Account(100);
      const account2 = new Account(200);
      expect(account1.balance).toBe(100);
      expect(account2.balance).toBe(200);
    });
  });

  describe("Deposits", () => {
    it("adds $10 to the balance on deposit", () => {
      const account = new Account();
      account.deposit(10);
      expect(account.balance).toBe(10);
    });

    it("throws an error when depositing negative values to account", () => {
      const account = new Account();
      expect(() => account.deposit(-10)).toThrow(
        new Error("Negative values are not allowed")
      );
    });

    it("throws an error when depositing $0 to account", () => {
      const account = new Account();
      expect(() => account.deposit(0)).toThrow(
        new Error("Zero value is not allowed")
      );
    });
  });

  describe("Withdrawals", () => {
    it("withdraws $10 from account when balance is above withdrawal amount ", () => {
      const account = new Account(25);
      account.withdraw(10);
      expect(account.balance).toBe(15);
    });

    it("throws error when withdrawal exceeds current balance", () => {
      const account = new Account(25);
      expect(() => account.withdraw(50)).toThrow(
        new Error("Insufficient funds")
      );
    });

    it("throws error when withdrawal amount is $0", () => {
      const account = new Account(25);
      expect(() => account.withdraw(0)).toThrow(
        new Error("Withdrawal amount cannot be $0")
      );
    });
  });

  describe("Transactions", () => {
    beforeEach(() => {
      Date.now = jest.fn(() => 1555356213674);
    });

    it("records single transaction for deposit", () => {
      const account = new Account();
      account.deposit(25);

      expect(account.transactions).toEqual([
        { date: "2019-3-16", amount: 25, balance: 25 }
      ]);
    });

    it("records single transaction for withdrawal", () => {
      const account = new Account(25);
      account.withdraw(10);

      expect(account.transactions).toEqual([
        { date: "2019-3-16", amount: -10, balance: 15 }
      ]);
    });

    it("records multiple transactions for deposits and withdrawals", () => {
      const account = new Account(100);
      account.deposit(25);
      account.withdraw(10);

      expect(account.transactions).toEqual([
        { date: "2019-3-16", amount: 25, balance: 125 },
        { date: "2019-3-16", amount: -10, balance: 115 }
      ]);
    });
  });

  describe("Print statements", () => {
    beforeEach(() => {
      Date.now = jest.fn(() => 1555356213674);
    });

    it("returns a list of statements with heading", () => {
      const account = new Account();
      account.deposit(100);
      account.withdraw(50);

      expect(account.statement()).toEqual([
        "Date\tAmount\tBalance\n",
        "2019-3-16\t100\t100\n",
        "2019-3-16\t-50\t50\n"
      ]);
    });
  });
});
