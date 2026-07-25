let form = document.querySelector('form');
let inputs = document.querySelectorAll('input');
let main = document.querySelector('#main');


form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    console.log(inputs[0].value);
    console.log(inputs[1].value);
    console.log(inputs[2].value);
    console.log(inputs[3].value);
    
    let card = document.createElement('div');
    card.classList.add('card');

    let profile = document.createElement('div');
    profile.classList.add('profile');

    let img = document.createElement('img')
    img.setAttribute('src', inputs[0].value);
    
    let h3 = document.createElement('h3');
    let h5 = document.createElement('h5');
    let h6 = document.createElement('h6');

    h3.textContent = inputs[1].value;
    h5.textContent = inputs[2].value;
    h6.textContent = inputs[3].value;

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(h6);

    main.appendChild(card);

    inputs.forEach(function (inp) {
        if (inp.type !== 'submit') {
            inp.value = '';
        }
    });
});