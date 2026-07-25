let ul = document.querySelector('ul')
    
ul.addEventListener('click', function (evt) {
    console.log(evt.target)
    evt.target.classList.toggle('lt')
})