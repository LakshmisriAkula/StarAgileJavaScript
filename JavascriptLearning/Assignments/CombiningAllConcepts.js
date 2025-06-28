/*

✅ Combining All Concepts
1.Create a class Student that stores grades in an array. Add methods to add a grade, calculate average, and print info.
2.Create a class ShoppingCart with methods to add items (object with name and price), remove items, and calculate total cost.
3.Write a function that takes an array of Person objects and returns a list of all names sorted alphabetically.
4.Write a function that filters out students with an average grade less than 50 from an array of Student objects.
5.Create a Library class that contains an array of Book objects and methods to add, remove, and list all books.

*/

console.log("1.Create a class Student that stores grades in an array. Add methods to add a grade, calculate average, and print info.");

class Student {

    constructor(name, grades) {
        this.name = name;
        this.grades = [];

    }

    addGrade(grade) {

        this.grades.push(grade);

        console.log(this.grades);

    }

    calculateAverage() {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++) {

            sum += this.grades[i];

        }

        // console.log("Sum is " + sum);

        let average = sum / this.grades.length;
        return average.toFixed(2);

    }

    printInfo() {
        console.log(`Student name is ${this.name}`);
        console.log(`Student grades are ${this.grades}`);
        console.log(`Student average is ${this.calculateAverage()}`);

    }

}

let stdInfo = new Student("jai")
stdInfo.addGrade(85)
stdInfo.addGrade(78)
stdInfo.addGrade(90)

console.log(stdInfo.calculateAverage());

stdInfo.printInfo();




console.log("2.Create a class ShoppingCart with methods to add items (object with name and price), remove items, and calculate total cost.");


class SHoppingCart {
    constructor() {

        this.items = []


    }

    addItems(prodName, price) {
        this.items.push({ prodName, price })

    }

    removeItems() {

        if (this.items.length === 0) {
            console.log("Cart is already empty!");
            return;
        }

        console.log(this.items);


        let removedItem = this.items.pop();
        console.log(`${removedItem.prodName} removed from cart`);

        console.log(this.items);


    }

    totalCost() {
        let priceTotal = 0;
        for (let item of this.items) {
            priceTotal += item.price
        }
        // for (let i = 0; i < this.price.length; i++) {
        //     sum += this.price[i]
        // }
        console.log("Total price is " + priceTotal);

    }



}


let prodInfo = new SHoppingCart();

prodInfo.addItems("Iphone", 30000)
prodInfo.addItems("Android", 20000)
prodInfo.addItems("China", 10000)

prodInfo.removeItems()

prodInfo.totalCost()

console.log("3.Write a function that takes an array of Person objects and returns a list of all names sorted alphabetically.");


class Person {
    constructor() {
        this.details = [];
    }

    getDetails(name, age) {
        this.details.push({ name, age })
    }

    sortNames() {
        console.log(this.details);

        let namesArray = this.details.map(person => person.name);
        namesArray.sort();
        console.log("Sorted Names: ", namesArray);




    }
}

let infoPerson = new Person();

infoPerson.getDetails("Raj", 30)
infoPerson.getDetails("Asha", 25)
infoPerson.getDetails("Veena", 15)

infoPerson.sortNames();