// // Async
// console.log("Start");

// setTimeout(() => {
//     console.log("Hello");
// }, 2000);

// console.log("End");


// // Promise
// const promise = new Promise((resolve, reject) => {

//     resolve('Success');
//     reject('Failed');

// })

// function getNumber() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(100);
//         }, 5000);
//     });
// }

// const num = getNumber();

// console.log(num);

// // then()

// const pass = Promise.resolve("Server said Hello !");

// pass.then((message) => {
//     console.log(message);

// });

// // catch()

// const fail = Promise.reject("Server connection lost.");

// fail.catch((message) => {
//     console.log(message);

// });

// //  Finally
//     async function start() {
//     try {
//         const user = await login();
//         console.log(user);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log("Finished login process.");
//     }
// }

// start();

// Async

//     function getFruit() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Apple");
//         }, 2000);
//     });
// }

// async function first() {
//     console.log("A");

//     const fruit = await getFruit();

//     console.log(fruit);

//     console.log("B");
// }

// console.log("1");

// first();

// console.log("2");

// console.log("3");

// Await

// async function start() {
//     console.log("Before");

//     const user = await getName();

//     console.log(user);

//     console.log("After");
// }

// start();


