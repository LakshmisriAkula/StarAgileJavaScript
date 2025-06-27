/*
    passing function as variable/agrument to another function.

    public string[] getData(){  // getting the data
    //  firstname --> gettext() // 0
        lastname --> gettext() // 1
        email -->gettext() //2
        contact. -->gettext() //3

        return arrayobject
    }

    public void printData(String[] userNamedata){ // printing
            syso(userNamedata[0]) // firstname
            syso(userNamedata[1]) // lastname
            syso(userNamedata[2]) //email
    }

    public void logData(){
        printData(getData());
    }
what is call back function/what is higher order function is js
when we pass function as parameter or argument to call another function is called call back function.
*/

// function greet(name){
//         console.log("My name is "+ name);
        
// }

// greet("selenium")


function display(){
    console.log("this is a display function");
    
}

function test1(testName,callbackfun){
    console.log("Hello Test "+testName);
    callbackfun();  
}

test1("Javascript",display)

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function calculator(a,b,func){

    return func(a,b)

}

console.log(calculator(1,2,add)) //3
console.log(calculator(1,2,sub)) // -1
console.log(calculator(1,2,mul))//2
console.log(calculator(1,2,div)) //0.5


