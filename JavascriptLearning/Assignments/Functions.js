/*
✅ Functions
1. Write a function to add two numbers.
2.Write a function that checks if a number is even or odd.
3.Write a function that returns the factorial of a number.
4.Write a function that reverses a string.
5.Write a function to find the largest number in an array.
*/

console.log("1. Write a function to add two numbers.");

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(1, 2));

console.log("2.Write a function that checks if a number is even or odd.");

function evenOrOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is even");

    } else {
        console.log(num + " is odd");

    }

}

evenOrOdd(4)

console.log("3.Write a function that returns the factorial of a number.");


function factorial(num) {

    let fact = 1;

    for (let i = num; i >= 1; i--) {

        fact = fact * i

    }

    console.log(fact);


}

factorial(5)

console.log("4.Write a function that reverses a string.");

function reverseStr(text) {

    let reverseStr = " "

    for (let i = text.length - 1; i >= 0; i--) {
        reverseStr += text[i];

    }
    console.log(reverseStr);

}

reverseStr("jain")

const reverseFun = (text) => {
    let reverseStr = text.split('').reverse().join('');
    console.log(reverseStr);
}

reverseFun("Raju")

console.log("5.Write a function to find the largest number in an array.");

function largestNumber() {

    let arr = [10, 45, 2, 99, 23, 67]
    console.log(Math.max(...arr))

}

largestNumber()

function largeNumber() {

    let arr = [10, 45, 2, 99, 23, 67]
    let largeNum = arr[0]
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > largeNum) {
            largeNum = arr[i]

        }
    }
    console.log("larget number is " + largeNum);


}

largeNumber()



