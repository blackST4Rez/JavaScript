// Arrays

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Superman", "Batman", "Flash", "Spiderman"];      
const myArr2 = new Array(1,2,3,4,5); 

// console.log(myArr[2]);

// Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);  
// myArr.shift(); 

// console.log(myArr.includes(89));
// console.log(myArr.includes(5));
// console.log(myArr.indexOf(89));
// console.log(myArr.indexOf(3));
// console.log(myArr);

// const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

// Slice vs Splice
console.log( "A", myArr);

const myn = myArr.slice(1,4);
console.log(myArr);
console.log( "B", myn);

const myn2 = myArr.splice(1,4);
console.log(myArr);
console.log( "C", myn2);



