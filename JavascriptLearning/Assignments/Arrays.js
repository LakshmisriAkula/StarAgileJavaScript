/*

✅ Arrays
1. Write a function to sum all elements in an array.
2. Write a function to remove duplicates from an array.
3.Write a function to sort an array in ascending and descending order.
4.Write a function to find the second largest number in an array.
5.Write a function to count the number of occurrences of each element in an array.

*/

console.log("1. Write a function to sum all elements in an array.");

function arrSum() {

    let arr = [10, 20, 30, 40, 50]
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log("Sum of numbers in arrays is: " + sum);


}

arrSum()


console.log("2. Write a function to remove duplicates from an array.");


function removeDuplicates() {

    let arr = [10, 20, 30, 20, 50]

    let uniqueArr = [...new Set(arr)]

    console.log(uniqueArr);



}

removeDuplicates()

console.log("3.Write a function to sort an array in ascending and descending order.");

let arr = [50, 20, 40, 30, 10]
arr.sort(function (a, b) {
    return a - b;
}

)

console.log("Ascending order: " + arr);

arr.sort(function (a, b) {
    return b - a;
}

)

console.log("Descending order: " + arr);




console.log("4.Write a function to find the second largest number in an array.");

function secondLargeNumber() {
    let numbers = [50, 20, 40, 30, 10]

    numbers.sort(function (a, b) {
        return b - a
    })

    console.log(numbers[1])

}

secondLargeNumber()


console.log("5.Write a function to count the number of occurrences of each element in an array.");

function countOccurrences() {
    let arr = [10, 20, 10, 30, 20, 10, 40];

    let count = {};

    for (let i = 0; i < arr.length; i++) {

        let element = arr[i];

        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }

    return count;
}




console.log(countOccurrences());