let nm = document.querySelector('#username')
let em = document.querySelector('#mail')
let form = document.querySelector('form')
let inputs = document.querySelector('input')
let pas = document.querySelector('#password')


form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    // Username Validator
    let hideBox2 = document.querySelector('#hide3');
    let hideBox = document.querySelector('#hide');
        if (nm.value.length <= 2) {
            hideBox.style.display = 'initial';
        }

        else if (nm.value.length > 20) {
            hideBox2.style.display = 'initial';
        }
            
        else {
            hideBox.style.display = 'none';
            hideBox2.style.display = 'none';
    }

    // Email Validator
    let hideBox3 = document.querySelector('#hide3');
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let corEmail = emailRegex.test(em.value);

    if (!corEmail) {
        console.log(emailRegex.test(em.value));
        hideBox3.style.display = 'initial';
    }

    else {
        hideBox3.style.display = 'none';
    }

    // Password Validator
    let hideBox4 = document.querySelector('#hide4');
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let corPass = passRegex.test(pas.value);

    if (!corPass) {
        console.log(emailRegex.test(pas.value));
        hideBox4.style.display = 'initial';
    }

    else {
        hideBox4.style.display = 'none';
    }

});