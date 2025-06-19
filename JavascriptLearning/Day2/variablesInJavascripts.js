/*
variables - in JS are used to store data that can be used and changed later in the program.
Javascripts keywords
var
    scope - function, Global, block
    function -  mean variables declared inside the function, scope of that variable within function only.
    Global - variable declared in side the class but outside the fuctions, so scope would accross the class.
    block - variable declares inside the block (if, try, while, catch, for) scope would remain within.
    var name ="nitin";
    var name = "sachin";
    redeclaration & re-assigned is allowed.

let - function +block + global
    redeclaration is not allowed. 
    let flag = true
    flag = false re-assigned.

const - (final) is immutable variable
    1. Scope - function + blocked + global
    2. re-declaration and re-assigned is not allowed.
    3. variable are immutable so that re-assigned not possible.
*/


// global
 var fname = "nitin";
 let id = 709;
 const email = "nitin@gmail.com";

 console.log("==============================Calling variable======================")

 console.log(fname)
 console.log(id)
 console.log(email)

 show()
  function show(){ // function declaration
    console.log("==============================Calling global variable======================")


    console.log(fname)
    console.log(id)
    console.log(email)

 }


  console.log("=============Local variables====================")

 function display(){

    let uName = "Sachin";
    var marks = 90;
    const percentage = 4.5;


    console.log("uName "+ uName)
    console.log("marks "+ marks)
    console.log("percentage "+ percentage)

 }

    display();

    /*
    console.log("uName "+ uName)
    console.log("marks "+ marks)
    console.log("percentage "+ percentage)

    ReferenceError: uName is not defined

    */

    //block scope

    if(true){
        let AutomationName = "Selenium";
        var SelVersion = "4.33.0";

        console.log("=======printing inside block================")
        console.log("AutomationName "+ AutomationName)
        console.log("SelVersion "+ SelVersion)
    }


    /*
     console.log("=======printing outside block================")
        console.log("AutomationName "+ AutomationName)
        console.log("SelVersion "+ SelVersion)

    ReferenceError: AutomationName is not defined

    */

     var data = "testing";
            console.log("line no .96 "+ data);

            var data= "programming";
            console.log("line no .99 "+ data)

            data= "coding"
            console.log("Line no 102 "+ data)

// in let re-declaration variable is not allowed.
            let testData = "Chrome Browser";

            console.log("line no 107 " +testData)
            
            testData = "firefox Browser";

            console.log("line no 111 " +testData)


// const final keyword.
// java --> final keyword - infront of variable, function and class

    const valueEnv = "12312ada";
    //const value ="1232131"; // re-declaration is not allowed.
    //valueEnv = "12312ada";// re initialization is not allowed


//     console.log("======================Hoisting=====================");


    /*

if i have declared someting at linke 127



    */

console.log("Hoisting with var")

        console.log("line no. 135 "  +a)
        var a = "xyz";
        console.log("line no. 131 " +a)


        console.log("Hoisting with let ")

        // console.log("line no. 142 "  +abc) //ReferenceError: Cannot access 'abc' before initialization
        let abc = "xyz";
        console.log("line no. 144 " +abc)


        console.log("Hoisting with const")

        //console.log("line no. 149"  +abcd) //ReferenceError: Cannot access 'abcd' before initialization
        const abcd = "1234";
        console.log("line no. 151 " +abcd)




