// "use strict"; //treat all JS code as newer version

// alert(3+3) // we are using nodejs not browser

// console.log(3
//     +
//     3); 

// console.log // code readability should be high 
// ("Raka" // avoid such way of writing code

// );


// let name = "Raka"
// let age = 23 
// let isLoggedIn = true // boolean can be true or false only

// number --> 2 to power 53
// bigint 
// string --> ""
// boolean --> true/false
// null --> standalone value ( symbolizes the nothingness )
// undefined --> value is not assigned but the variable is defined 
// symbol --> unique

//object

// console.log(typeof undefined); // undefined is the answer
// console.log(typeof null); // object is the answer

/*

// Primitive(Non-Referenced) & Non-Primitive(Referenced)

----Non-Referenced----
// 7 Types : String, Number, Boolean, null, undefined, symbol, BigInt

----Referenced----
// Array, Objects, Functions
// Referenced Data types is always an object
*/

/* 

When primtive data types stack is used.
--> you get copy of the declared variable.   


when non-primitive data types heap is used.
--> you get reference of the declared variable.



*/

/*
// Stack Example        
let firstName = "Raka";
let secondName = firstName;   // copy of firstName is stored in secondName

secondName = "Hari";  

console.log(firstName);
console.log(secondName);  // firstName is not changed   

// Heap Example
let userOne = {
    email : "user1234@gmail.com",
    id : "1234",
};

let userTwo = userOne;  // reference of userOne is stored in userTwo

userTwo.email = "abcd1234@gmail.com";  // changing email in userTwo 

console.log(userOne.email);
console.log(userTwo.email);

*/


