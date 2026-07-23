// Simple JS for a default clock.

const clock = document.getElementById('clock');

// setInterval(function () {
//     let date = new Date ();
//         clock.innerHTML = date.toLocaleTimeString();
//     }, 1000)

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)