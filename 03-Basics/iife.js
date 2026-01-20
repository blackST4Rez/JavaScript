// IIFE - Immediately Invoked Function Expression       
// Named IIFE
(function db(params) {
    console.log(`DB Connected`);  
})(); // seperator as a stop when using more than one IIFE

// Unamed IIFE
// Using Arrow Function
( (username) => {
    console.log(`DB Connected for ${username}`);
})('Raka Maharjan');