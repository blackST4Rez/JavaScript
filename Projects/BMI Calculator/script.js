// Simple JS for calculating BMI of the body.

const form = document.querySelector('form');
// this will store an empty value in hg if targeted outside an event listener.
// const hg = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const hg = parseInt(document.querySelector('#height').value);
    const wg = parseInt(document.querySelector('#weight').value);
    const res = document.querySelector('#results');
    const bmi = (wg / ((hg / 100) ** 2)).toFixed(2);

    if (hg === '' || hg < 0 || isNaN(hg)) {
        res.innerHTML = 'Please enter a valid height.';
    }

    else if (wg === '' || wg < 0 || isNaN(wg)) {
        res.innerHTML = 'Please enter a valid weight.';
    }
        
    else {
        res.innerHTML = `The BMI of your body is ${bmi}.`
    }


    let guide = '';

    if (bmi < 18.6) {
        guide = 'Under Weight';
    }
    
    else if (bmi >= 18.6 && bmi <= 24.9) {
        guide = 'Normal Weight';
    }
    
    else {
        guide = 'Over Weight';
    }

    res.innerHTML = `
    Your BMI is <strong>${bmi}</strong>.<br><br>
    Weight Guide: <strong>${guide}</strong>`;
});
