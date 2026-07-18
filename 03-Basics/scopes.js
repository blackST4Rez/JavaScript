/* 
var c = 200;
let a = 300

if statement is block scope

if(true){
    let a = 10
    const b = 20;
}

---------Outside the block scope is Global scope--------

console.log(a);
console.log(b);
console.log(c); 
*/

// Variable declared inside block scope cannot be accesed outside.
// Variable declared outside (global scope) can be accessed inside the block scope.

/*
function one (){
    const username = 'Raka
    function two(){
        const website = 'rakamaharjan.com';
        console.log(username);
    }  
        console.log(website) two()
}
one()
*/

// if(true){
//     const username = 'RakaMaharjan';
//     if(username === 'RakaMaharjan'){
//         const website = 'rakamaharjan.com'; 
//         console.log(`Username & website is ${username} and ${website}.`);
//     }
    // console.log(website);
// }
// console.log(username);

// Concept of Hoisting  
// console.log(addone(5));   
// function addone(num){
//     return num + 1;
// }
// // addone(5);   

// addtwo(5);
// const addtwo = function(num){
//     return num + 2; 
// }
// addtwo(5);