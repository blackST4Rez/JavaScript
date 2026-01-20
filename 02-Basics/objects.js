// Singleton
// Object.create() 

// Object Literals

// const sym = Symbol("key1");

// const user = {
//     name: 'Raka',
//     'fullname': 'Raka Maharjan',   
//     age: 20,
//     [sym]: "Key1",
//     address: "Kathmandu",
//     email: "raka@example.com",
//     isLoggedIn: true,
//     lastLoginDays: ['Monday', 'Friday']     
// }

// console.log(user.name);
// console.log(user.age);
// console.log(user.address);
// console.log(user.email);
// console.log(user.isLoggedIn);
// console.log(user.lastLoginDays);
// console.log(typeof user.sym);


// console.log(user["name"]);
// console.log(user["age"]);
// console.log(user["address"]);
// console.log(user["email"]);
// console.log(user["isLoggedIn"]);
// console.log(user["lastLoginDays"]);      
// console.log(user[sym]);

// Freezing the object      
// user.email = 'raka@maharjan.com'
// Object.freeze(user);
// user.email = 'raka@hello.com'
// console.log(user);

// const spotifyUser = {

//     username: 'rakaMaharjan',
//     password: 'mypassword',
//     email: 'raka@example.com',
//     plan: 'premium',
//     premium: true,
//     playlists: ['Daily Mix 1', 'Discover Weekly'],
//     premiumUntil: '2024-12-31',     

// }

// console.log(spotifyUser);

// Nested Object    
// const regularUser = {
//     email: 'raka@example.com',
//     fullName:{
//         userFullName: {
//             firstName: 'Raka',
//             lastName: 'Maharjan',
//         }
//     }
// }

// console.log(regularUser.fullName.userFullName);

//
// const ob1 = {
//     1: 'a', 
//     2: 'b'
// };

// const ob2 = {
//     3: 'c', 
//     4: 'd'
// };

// const ob3 = {...ob1,...ob2}; // Spread Operator is the best way.
// // const ob4 = Object.assign({}, ob1, ob2);

// console.log(ob1);
// console.log(ob2);
// console.log(ob3);
// console.log(ob4);

// Data from Database
// const databaseUser = [
//     {
//         id: 1,
//         email: 'ram@example.com',  
//     },
//         {
//         id: 2,
//         email: 'sita@example.com',  
//     },
//         {
//         id: 3,
//         email: 'hari@example.com',  
//     },
// ]

// console.log(Object.keys(spotifyUser)); // gives the keys
// console.log(Object.values(spotifyUser));// gives the values
// console.log(Object.entries(spotifyUser));// gives the key value pairs

// console.log(spotifyUser.hasOwnProperty('premium')); // checks the property

// databaseUser[1].email

// Objects Destructuring
// const course = {
//     courseName: 'JavaScript for Beginners',
//     courseDuration: '3 months', 
//     courseProvider: 'Code Academy',
//     coursePrice: 299,
// }

// const {courseName : cName} = course

// console.log(cName);       

// API data format ( with arrays and nested objects )
// {
//     {}
//     {}
//     {[
//         {},
//         {},
//     ]}
// }