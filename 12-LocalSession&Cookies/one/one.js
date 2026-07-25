
localStorage.setItem("name", "Raka");

let val = localStorage.getItem("name");

localStorage.removeItem("name")

localStorage.setItem('friends', JSON.stringify(['Raka', 'Raka2', 'Raka3']))

let fr = JSON.parse(localStorage.getItem('friends'))