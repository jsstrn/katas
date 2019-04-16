const Account = require("./Account");

const account = new Account(100);

account.deposit(50);
account.withdraw(75);

account.print();
