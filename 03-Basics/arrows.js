/*
const user = {
    username: 'Raka Maharjan',
    price: 199,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome Back!`); // (this) keyword targets the current context.
        console.log(this)     
    }
};  

user.welcomeMessage(); // Context is not changed here
user.username = 'Sam'; // Context changes here
user.welcomeMessage(); //Output of the changed context
*/

// console.log(this);

// function abc() {
//     let username = 'Raka';
//     console.log(this.username);
// }
// abc();

// const xyz = function cde() {
//     let username = 'Raka';
//     console.log(this.username);
// }

// const xyz = () => {
//     let username = 'Raka';
//     console.log(this);
// };
// xyz();

/*
// Arrow Function
// ------Basic Arrow Function Syntax------  
// when using curly brackets you ALWAYS use return     
const addNumbers = (num1, num2) => {  
    return num1 + num2;     
}
console.log(addNumbers(9, 5));

//------Implicit Return------
// when using small brackets you dont use return
const addTwoNumbers = (num1, num2) => (num1 + num2); 
console.log(addTwoNumbers(9, 5));

//------Object Parameter------
// Object needs to be wrapped in parenthesis to avoid syntax error      
const addTwo = (username, plan) => ({username: 'Raka Maharjan', plan: 'Premium'});
console.log(addTwo());
*/


