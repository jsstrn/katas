class Account {
  constructor(amount = 0) {
    this.balance = amount;
    this.transactions = [];
  }

  formatCurrentDateTime(time) {
    const d = new Date(Date.now());
    const year = d.getFullYear();
    const month = d.getMonth();
    const date = d.getDate();
    return `${year}-${month}-${date}`;
  }

  createTransaction(amount, balance) {
    const date = this.formatCurrentDateTime();
    return {
      date,
      amount,
      balance
    };
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  deposit(amount) {
    if (amount === 0) throw new Error("Zero value is not allowed");
    if (amount < 0) throw new Error("Negative values are not allowed");

    this.balance += amount;

    const transaction = this.createTransaction(amount, this.balance);
    this.addTransaction(transaction);
  }

  withdraw(amount) {
    if (amount === 0) throw new Error("Withdrawal amount cannot be $0");
    if (amount > this.balance) throw new Error("Insufficient funds");

    this.balance -= amount;

    const transaction = this.createTransaction(-amount, this.balance);
    this.addTransaction(transaction);
  }

  statement() {
    const header = `Date\tAmount\tBalance\n`;
    const entries = this.transactions.map(
      t => `${t.date}\t${t.amount}\t${t.balance}\n`
    );

    entries.unshift(header);
    return entries;
  }

  print() {
    const statement = this.statement();
    statement.forEach(s => console.log(s));
  }
}

module.exports = Account;
