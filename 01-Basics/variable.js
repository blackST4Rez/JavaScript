// Keywords like const, let, var and let are pre-defined in the javascipt compiler.

const accountId = 983424
let accountEmail = "raka2026@gmail.com"
var accountPassword = "12345"
let accountState;
accountCity = "Kathmandu"

// accountId = 12345 after const the value cannot be changed // not allowed

accountEmail = "hari2025@gmail.com"
accountPassword = "324345"
accountCity = "Pokhara"

//Use const and let more, Prefer not use var Cause of issue in block scope and functional scope

// when variable is decalred with no value it is undefined
//

// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// .table() is a method to print the data in a tabular structure. 

