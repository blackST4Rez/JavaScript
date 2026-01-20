// const user = {
//     username: 'Raka Maharjan',
//     price: 199,
    
//     welcomeMessage: function(){
//         console.log(`${this.username}, Welcome Back!`);
//         console.log(this);
        
//     }
// };  

// user.welcomeMessage(); // Context is not changed here
// user.username = 'Sam'; // Context changes here
// user.welcomeMessage();

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

// Arrow Function
//------Basic Arrow Function Syntax------       
// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2;     
// }
// console.log(addTwoNumbers(9, 5));

//------Implicit Return------
// const addTwoNumbers = (num1, num2) => num1 + num2;
// console.log(addTwoNumbers(9, 5));

//------Object Parameter------
// Object needs to be wrapped in parenthesis to avoid syntax error      
// const addTwo = (num1, num2) => ({username: 'Raka Maharjan'});
// console.log(addTwo(3, 5));


