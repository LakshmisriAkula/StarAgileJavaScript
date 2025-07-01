/*
1. What is OOps/ specific pillar of ops
2. purpose.
3. How to implement?
 To acheive it use getter and setter and define/declared the properties 
 of class within functions or constructors

*/

class Employee {

    constructor() {
        let id;
        let name;

    }

    setID(id) {
        this.id = id;
    }

    setName(name) {
        this.name = name;
    }

    getID() {
        return this.id;
    }

    getName() {
        return this.name;
    }

}

let s1 = new Employee()
s1.setID(1)
s1.setName("Sai")
console.log(s1.getID());
console.log(s1.getName());

