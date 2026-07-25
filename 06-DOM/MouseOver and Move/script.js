let abcd = document.querySelector('#abcd')

// abcd.addEventListener('mouseover', function (event) {
//     console.log(event.target);
//     abcd.style.backgroundColor = "Yellow";
// });

// abcd.addEventListener('mouseout', function (event) {
//     console.log(event.target);
//     abcd.style.backgroundColor = "aquamarine";
// });

window.addEventListener('mousemove', function (event) {
    console.log(event.clientX, event.clientY);
    abcd.style.top = event.clientY + 'px';
    abcd.style.left = event.clientX + 'px';
});