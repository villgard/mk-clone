const arenas = document.querySelector('.arenas');
const $randombutton = document.querySelector('.button');


let player1 = {
    player: 1,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['arm', 'leg'],
    attack: function() {
        console.log(this.name + 'Fight...')
    },
}

let player2 = {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['arm', 'leg'],
    attack: function() {
        console.log(this.name + 'Fight...')
    },
}

function createElement(tag, className) {
    const $tag = document.createElement(tag)
    if (className) {
        $tag.classList.add(className);
    }
    return $tag
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player'+playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character')
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    return $player
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player'+ player.player +' .life');
    player.hp -= Math.floor(Math.random() * 20);
    $playerLife.style.width = player.hp + '%';

    if (player.hp <= 0) {
        player.hp === 0;
        $randombutton.disabled = true;

        if (player1.hp != 0) {
            arenas.appendChild(playerWin(player1.name));        
        } else if (player2.hp != 0) {
            arenas.appendChild(playerWin(player2.name));        
        }
    }


}

function playerWin(name) {
    const $winTitle = createElement('div', 'winTitle');
    $winTitle.innerText = name + ' wins';

    return $winTitle
}

$randombutton.addEventListener('click', function() {
    changeHP(player1);
    changeHP(player2);
});

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));
