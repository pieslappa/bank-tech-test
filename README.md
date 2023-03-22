# Bank Tech Test

## Installation

Clone the Git repo using

`$ git clone git@github.com:pieslappa/bank-tech-test.git`

Move into the cloned repo's directory

`$ cd bank-tech-test`

run npm to install necessary modules
`$ npm install`

## Testing

To run Jest, run the following:
`$ npm test`

## How to Use the Program

Firstly run the Node REPL
`$ node`

Then, we need to require the relevant module and initialise a new bankAccount:

```
const BankAccount = require("./bankAccount);
let account = new BankAccount();
```

To make a deposit:
`account.deposit() // Insert a positive integer here.`

To make a withdrawal:
`account.withdrawal() // Insert a positive integer`

To get a statement:
`account.printStatement() // This outputs all of your transactions in reverse chronological order`
