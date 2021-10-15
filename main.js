const arenas = document.querySelector('.arenas');


let player1 = {
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['arm', 'leg'],
    attack: function() {
        console.log(this.name + 'Fight...')
    },
}

let player2 = {
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['arm', 'leg'],
    attack: function() {
        console.log(this.name + 'Fight...')
    },
}

function createPlayer(playerClass, playerName, playerHp, playerImg) {
    const $player = document.createElement('div')
    const $progressbar = document.createElement('div');
    const $character = document.createElement('div')
    const $life = document.createElement('div');
    const $name = document.createElement('div');
    const $img = document.createElement('img');

    $player.classList.add(playerClass);    
    $progressbar.classList.add('progressbar');
    $character.classList.add('character');
    $life.classList.add('life');
    $life.style.width = playerHp + '%';
    $name.classList.add('name');
    $name.innerText = playerName;
    $img.src = playerImg;

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    arenas.appendChild($player);
}

createPlayer('player1', player1.name, player1.hp, player1.img);
createPlayer('player2', player2.name, player2.hp, player2.img);
