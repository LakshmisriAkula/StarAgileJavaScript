/*

✅ Classes and Methods
1.Create a Car class with properties like make, model, and year. Add a method to display its details.
2.Create a BankAccount class with methods to deposit, withdraw, and check balance.
3.Create a Book class with a method to display book info and a method to mark it as read.
4.Create a Rectangle class with methods to calculate area and perimeter.
5.Create a Person class with a method that returns their full name and age.
*/

console.log("1.Create a Car class with properties like make, model, and year. Add a method to display its details.");

class car {

    constructor(make, model, year) {
        this.make = make;
        this.model = model
        this.year = year;
    }

    displayDetails() {

        console.log(`Car details: ${this.make} ${this.model} ${this.year}`);

    }

}

let carObj = new car("Toyota", "Camry", 1995)
carObj.displayDetails()

console.log("2.Create a BankAccount class with methods to deposit, withdraw, and check balance.");

class Bank {
    constructor(amount = 0) {
        this.amount = amount
    }

    deposit(amount) {
        this.amount += amount;
        console.log("Amount diposited " + amount + " Balance is " + this.amount);

    }

    withdraw(amount) {

        if (amount > 0 && amount <= this.amount) {
            this.amount -= amount;
            console.log(`Wthdrwan ${amount} and Balance is ${this.amount}`)

        } else {
            console.log("Insufficient balance");

        }

    }

    balance() {
        console.log("Current balance is " + this.amount);

    }
}

let bankInfo = new Bank();
bankInfo.deposit(500)
bankInfo.withdraw(100)
bankInfo.balance()