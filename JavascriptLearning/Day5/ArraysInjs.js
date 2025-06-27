// String[] object = {"Nitin","Sachin"};
//int object = new int[8];
/*
javascript array is collection of similar or different datatype
Array have multiple methods in js

let arr = [10,20,30,40,50]  //5 length
          0,  1, 2, 3, 4   //4  index
*/

let arr = [10, 20, 30, 40, 50];
console.log(typeof arr);
console.log(arr);

console.log("size of an arr " + arr.length);
console.log("Element at index 3 " + arr[3]);
console.log("element from wrong index " + arr[10]);


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + " --> " + i);

}

for (let e of arr) { // iterates over the value
    console.log(e);[10, 20, 30, 40, 50]

}

for (let e in arr) { // iterates over index(keys)
    console.log(e);[0, 1, 2, 3, 4]

}



console.log("---------------Array method---------------");

let color = ["red", "pink", "white", "orange"]
console.log(color);

//push(): Appends the element at the end of array and return new length.
//unshift(): Appends the element at the first index and reutrn new length.

console.log("------Push()--------");
color.push("red");
console.log(color);

console.log("------unshift()--------");
color.unshift("orange")
console.log(color);

//pop(): remove the element at the end of an array
// shift(): remove the elemtn at the first index of an array

console.log("------Pop()--------");
color.pop("red");  // remove at last index
console.log(color);


console.log("------shift()--------");
color.shift("orange") // remove at first index
console.log(color);

console.log("=========================splice()========================");

// splice(): delete any element from any position and add element from same position
//splice(0,1), //splice(0,1,"Kumar")


let nameList = ["ravi", "ketan", "arun", "gopi", "swapnil"]

console.log(nameList.length);
console.log(nameList);

let delElement = nameList.splice(0, 1)  // ravi   
console.log(delElement);
console.log(nameList); //[ 'ketan', 'arun', 'gopi', 'swapnil' ]

let addElement = nameList.splice(0, 1, "Kumar", "Nitin") // [ 'Kumar', 'Nitin', 'arun', 'gopi', 'swapnil' ]
console.log(addElement);
console.log(nameList);

let addElementWithoutRemoving = nameList.splice(0, 0, "Jai") // [ 'Jai' , 'Kumar', 'Nitin', 'arun', 'gopi', 'swapnil' ]
console.log("Without removing ele: " + nameList);

let addElementAtIndex2 = nameList.splice(2, 0, "Raga") // [ 'Jai' , 'Kumar', 'Raga', 'Nitin', 'arun', 'gopi', 'swapnil' ]
console.log("Add Element At Index 2 Without removing ele: " + nameList);



nameList.splice(0, 3, "Nag") //[ 'Nag', 'Nitin', 'arun', 'gopi', 'swapnil' ]

console.log(nameList);




console.log("=========================slice========================");

// In JavaScript, the slice() method is used to extract a portion of an array or a string without modifying the original.

let fruits = ["Apple", "Banana", "Grape"];

let slicedFruits = fruits.slice(0, 1)

console.log(slicedFruits); //Apple

console.log(fruits); //Apple,Banana,Grape


let slicedFruitsWithNegative = fruits.slice(-2)

console.log(slicedFruitsWithNegative); //Banana,Grape

console.log(fruits); //Apple,Banana,Grape


console.log("=========================Index of========================");

// The indexOf() method in JavaScript is used to find the index (position) of the first occurrence of a specified element or character in an array or string.



let colors = ["Red", "Green", "Blue", "Green"];

console.log(colors.indexOf("Green")); // 1

console.log(colors.indexOf("Green", 2)); //3

console.log("----------------------------Multiple D array--------------------------");


let testData = [["admin", "admin@123"], ["nitin", "nitin@123"], ["jai", "jai@123"]]

console.log(testData.length); //3

console.log(testData[2][0]); //jai



















