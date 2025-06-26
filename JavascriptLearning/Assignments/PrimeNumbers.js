/*
Assignment 3:
====================
write a js code to validate any prime number

*/

let num = 31;
let isPrime = true;

if (num <= 1) {
    console.log(num + " is not prime number");

} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {

        if (num % i === 0) {
            isPrime = false;
            break;

        }

    }

if (isPrime) {
    console.log(num + " is a prime number");

} else {
    console.log(num + " is not a prime number");

}

}