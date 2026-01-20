// Basics function syntax
// function sayMyName () {
//     console.log('Bruno');
//     console.log('Bruno');
//     console.log('Bruno');
//     console.log('Bruno');
//     console.log('Bruno');
// }
// sayMyName();

// Function with parameters and arguments
// function addTwoNumbers(a,b){
//     console.log(a + b); 
// }
// const result = addTwoNumbers(3,5); // function call can be stored in a variable
// console.log(result); // a mistake

// Way to store value in a variable with the use of return
// function addTwoNumbers(num1,num2){
//     let res = num1+ num2;
//     return res;
// }
// const res = addTwoNumbers(3,5);
// console.log(`Result is ${res}.`);

// funtion with if satatements
//----> here in paramete if we give sam it is a default value meaning the function is never undefined
//----> if sam was not given in parameter then if statement is executed 
//---->without if statement and default parameter value Raka is printed cause it is passed in the arguments

// function loginUserMessage(username = 'Sam'){
//     if(!username){
//         console.log(`Please enter your name:`);
//         return;
//     }
//     return `Welcome back, ${username}!`;      
// }
// const message = loginUserMessage('Raka');     
// console.log(message);

// Cart functionality with the use of rest operator 
// function calculateCartPrice(...price){
//     return price;
// }
// console.log(calculateCartPrice(200, 400, 600));

// Fuuntiom with object as parameter
// const user = {
//     username:'RakaMaharjan',
//     price: 199,
// };

// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`);
    
// }

// handleObject(user);
// to pass object as an argument
// handleObject({
//     username: 'Yi Lon Mah',
//     age: 99,
// })

// Function with an array as parameter
// const price = [100, 200, 300, 400, 500];
// function returnSecondValue(getArray){
//     return getArray[3];
// }
// // Arguments can be passed as array in such a way.
// console.log(returnSecondValue(price));
// console.log(returnSecondValue([100, 200, 300, 400, 500]));
