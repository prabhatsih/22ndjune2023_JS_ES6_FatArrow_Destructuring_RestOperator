//1. Function Definition
function myFunctionA(...n1){ //Old way 1995 to till now.
    //Function Body
    //Statement
    console.log('--->',n1[0]);

    //Every Function may return something. like number, string, array, object
    
    return 10 + n1[0]; //I'm a returning number.
}

//2. Call
let x = myFunctionA(25); //25 is a formal arguments
console.log(x);

//Create a function in new way ES6 2015 (Fat Arrow Function)
//1. Fucntion Definition
let myFunctionB=(...n2)=>{ //n2 is formal argument with rest operatior
    //functon body
    console.log(n2[0]);
    //Every funtion may retrun something.
    var a=20; //local variable
    return a + n2[0];
}

//2. Function Calling/Invokig
let b = myFunctionB(20);
console.log(b);
console.log(x+b);


let myFunctionC=n3=>{ //n3 is formal argument
    //function body

    console.log(n3);
}
let c = myFunctionC (3);
console.log(c);



const myFunctionD = (n4,n5) => {
    return n4+n5;
}

let d = myFunctionD(4,5);
console.log(d);

//1. Function Definition
let myFunctionE = (a,b) => {
 return a+b;
}
//2. Function Calling/Invoking
let e = myFunctionE(2,3);
console.log(e);

//1. Function Defination 
let myFunctionF = (c) => c*c;
//2. call/invoke
console.log(myFunctionF(3));