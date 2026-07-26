const users = [
    {
        name: "Diego Maradona",
        pic: "https://i.pinimg.com/1200x/c6/d8/78/c6d878f4ec8bd7ec98a8de58ad3e0fe0.jpg",
        bio: "An argentian football player.",
    },
    {
        name: "Allen Iversion",
        pic: "https://i.pinimg.com/736x/37/db/57/37db5712ab426ff439c852513aa9a959.jpg",
        bio: "NBA Basketball Player.",
    },
    {
        name: "Jimi Hendrix",
        pic: "https://i.pinimg.com/736x/ed/fa/f7/edfaf720f302cc4a6e74882199a23e3c.jpg",
        bio: "A Guitarist.",
    },
    {
        name: "William DaFoe",
        pic: "https://i.pinimg.com/736x/f5/5a/78/f55a78f260390575a16ff4cb5338c2df.jpg",
        bio: "A hollywood actor.",
    },
    {
        name: "Hugh Jackman",
        pic: "https://i.pinimg.com/736x/e0/c8/aa/e0c8aab7d38fd04c083ae0a320994fae.jpg",
        bio: "Wolverine.",
    },
    {
        name: "Jimi Hendrix Junior",
        pic: "https://i.pinimg.com/736x/d3/32/83/d332830aa3a993a811dd11e2e169198c.jpg",
        bio: "A Prodigy.",
    },
    {
        name: "Fighter Jett",
        pic: "https://i.pinimg.com/1200x/ce/8d/16/ce8d16600d51262343c13c30afd22851.jpg",
        bio: "SuperSonic every Second.",
    },
];

function showUsers(people) {
    people.forEach(function (user) {

        //Create outer card div
        const card = document.createElement('div');
        card.classList.add('card');

        //Create IMG
        const img = document.createElement('img');
        img.src = user.pic;
        img.classList.add('bg-img');

        //Create blurred-layered div
        const blurredLayer = document.createElement('div');
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add('blurred-layer');

        //Create content div
        const content = document.createElement('div');
        content.classList.add('content');

        //Create H3 and Paragraph
        const heading = document.createElement('h3');
        heading.textContent = user.name;

        const para = document.createElement('p');
        para.textContent = user.bio;

        //Append H3 and Paragraph to content
        content.appendChild(heading);
        content.appendChild(para);

        //Append all to card
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        //Append to the cards
        document.querySelector('.cards').appendChild(card)

    });
};

showUsers(users);

let inp = document.querySelector('.inp');

inp.addEventListener('input', function () {
    let newUsers = users.filter((user) => {
        return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
    });

    document.querySelector('.cards').innerHTML = '';
    showUsers(newUsers);
});