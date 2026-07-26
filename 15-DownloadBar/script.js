let bar = document.querySelector('#progressFill');
let per = document.querySelector('#percentDisplay');
let mb = document.querySelector('#sizeLabel');
let mt = document.querySelector('#main-text');
let prog = 0;

let intv = setInterval(() => {
    if (prog <= 99) {
        prog++;
        bar.style.width = `${prog}%`;
        per.textContent = `${prog}%`;
        mb.textContent = `${prog}MB`;
    }

    else {
        mt.textContent = `Downloaded`;
        clearInterval(intv);
    }
    
}, 50);


