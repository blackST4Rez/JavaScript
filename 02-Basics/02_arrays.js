const marvelHeroes = ["Spiderman", "Ironman", "Thor", "Hulk"];
const dcHeroes = ["Batman", "Superman", "Flash", "Wonderwoman"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes); 
// console.log(marvelHeroes[3][1]);              

// const allHeroes = marvelHeroes.concat(dcHeroes); 
// console.log(allHeroes);

const allnewHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allnewHeroes);

const anotherArr = [1,2,3,[4,5,6],7,8,9,[3,4,[5,7],7,9,0]];
console.log(anotherArr.flat(Infinity));

console.log(Array.isArray("RakaMaharjan"));
console.log(Array.from("RakaMaharjan"));
console.log(Array.from({name : "Raka"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;       

console.log(Array.of(score1,score2,score3));

