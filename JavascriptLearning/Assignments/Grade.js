/*
Asssignment 5: 
===============
write a js code for grade mechanism
marks are greater than or equal to 70=A
marks are greater than or equal to 60=B
marks are greater than or equal to 40=c
otherwise fail
*/

let marks = 59;

if (marks >= 70) {
    console.log("Grade is A");
} else if (marks >= 60) {
    console.log("Grade is B");
} else if (marks >= 40) {
    console.log("Grade is C");

} else {
    console.log("Marks below 40 and failed");
}

