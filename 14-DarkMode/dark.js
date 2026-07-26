let body = document.querySelector('body');
let btn = document.querySelector('#toggle-button');
let textDiv = document.querySelector('.text-container');
let saveDiv = document.querySelector('.saved-container');
let savetxt = document.querySelector('.savedTheme-txt')
const wDark = window.matchMedia("(prefers-color-scheme: dark)");
let prevChoice = localStorage.getItem('theme');
let saveChoice = localStorage.getItem('text');


//Condition to check which value of localStorage is the website is in the current time
if (prevChoice === 'dark') {
    body.classList.add('dark');
    btn.classList.add('dark-box');
    textDiv.classList.add('dark-box');
    saveDiv.classList.add('dark-box');
    savetxt.textContent = saveChoice;
}

else if (prevChoice === 'light') {
    body.classList.remove('dark');
    btn.classList.remove('dark-box');
    textDiv.classList.remove('dark-box');
    saveDiv.classList.remove('dark-box');
    savetxt.textContent = saveChoice;
}


btn.addEventListener('click', function () {

    console.log('Toggle Clicked');

    //Change the theme to dark mode.
    if (prevChoice === 'light') {
        body.classList.toggle('dark');
        btn.classList.toggle('dark-box');
        textDiv.classList.toggle('dark-box');
        saveDiv.classList.toggle('dark-box');
        savetxt.textContent = saveChoice;
    }
    else if (prevChoice === 'dark') {
        body.classList.toggle('dark');
        btn.classList.toggle('dark-box');
        textDiv.classList.toggle('dark-box');
        saveDiv.classList.toggle('dark-box');
        savetxt.textContent = saveChoice;
    }
    
    //Condition to store theme to the localStorage
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        localStorage.setItem('text', 'Dark')
    }
    
    else {
        localStorage.setItem('theme', 'light');
        localStorage.setItem('text', 'Light')
    }

});

//Function to match theme with OS

wDark.addEventListener('change',function(evt){

    if (evt.matches) {
        body.classList.add('dark');
        btn.classList.add('dark-box');
        textDiv.classList.add('dark-box');
        saveDiv.classList.add('dark-box');
        }

    else {
        body.classList.remove('dark');
        btn.classList.remove('dark-box');
        textDiv.classList.remove('dark-box');
        saveDiv.classList.remove('dark-box');
    }
    
});







