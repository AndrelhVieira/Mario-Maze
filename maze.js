/* Declarações */
const map = [
    "WWWWWWWWWWWWWWWWWWWWW   ",
    "W   W     WC    W W W   ",
    "W W W WWW WWWWW W W W   ",
    "W WCW   W     W W   W   ",
    "W WWWWWWW W WWW W W W   ",
    "W         W     W W W   ",
    "W WWW WWWWW WWWWW W W   ",
    "W W   W   W W     W WWWW",
    "W WWWWW W W W WWW W   FW",
    "S     W W W W W W WWWWWW",
    "WWWWW W W W W W W WCW   ",
    "W     W W W   W W W W   ",
    "W WWWWWWW W WWW W W W   ",
    "W      CW       W   W   ",
    "WWWWWWWWWWWWWWWWWWWWW   ",
];
const section = document.getElementById('section');
const body = document.getElementById('body');
let linhaAtual = 0;
let colunaAtual = 0;
const player = document.createElement('div');
player.classList.add('playerY');
const btnStart = document.getElementById('btnStart');
let error = document.createElement('div');
error.classList.add('erro');
error.style.visibility = 'hidden';
const arrows = document.getElementById('arrows');

/* Funções */
const criaDivs = (arr) => {
    section.appendChild(error);
    for (let i = 0; i < arr.length; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < arr[i].length; j++) {
            const div = document.createElement('div');
            div.classList.add('div');

            if (arr[i][j] === 'W') {
                div.classList.add('wall');
                div.id = `${i}-${j}`;
            } else if (arr[i][j] === 'S') {
                div.classList.add('start');
                div.appendChild(player);
                linhaAtual = i;
                colunaAtual = j;
                div.id = `${i}-${j}`;
            } else if (arr[i][j] === 'F') {
                div.classList.add('finish');
                div.id = `${i}-${j}`;
            } else if (arr[i][j] === 'C') {
                div.classList.add('cogumelo');
                div.id = `${i}-${j}`;
            } else {
                div.id = `${i}-${j}`;
            }
            row.appendChild(div);
        }
        section.appendChild(row);
    }
    body.appendChild(section);
}

const erro = () => {
    error.style.visibility = 'visible';
    error.innerText = 'Oops, you hit a wall!';
}
const vitoria = document.createElement('div');
const btnAgain = document.createElement('button');
const anunciaVitoria = () => {
    body.removeChild(section)
    const txtVitoria = document.createElement('h2');
    txtVitoria.innerText = 'Congrats!! You won!!'
    vitoria.classList.add('vitoria');
    btnAgain.innerText = 'Play Again?'
    btnAgain.classList.add('btnAgain');
    const castle = document.createElement('img');
    const mario = document.createElement('img');
    const princess = document.createElement('img');

    castle.src = 'images/castle.png';
    mario.src = 'images/victory.png';
    princess.src = 'images/princess.png';

    castle.classList.add('castle');
    mario.classList.add('mario');
    princess.classList.add('princess');

    vitoria.appendChild(txtVitoria);
    vitoria.appendChild(btnAgain);
    vitoria.appendChild(mario);
    vitoria.appendChild(castle);
    vitoria.appendChild(princess);

    body.appendChild(vitoria);

}

const verificaUp = () => {
    if (arrLetters[linhaAtual - 1][colunaAtual] === ' ') {
        let quadradoY = document.getElementById(`${linhaAtual - 1}-${colunaAtual}`);
        quadradoY.appendChild(player);
        linhaAtual--;
        error.innerHTML = '';
        error.style.visibility = 'hidden';
        player.classList.remove('playerX');
        player.classList.add('playerY');
        player.style.animationName = "slideUp";
    } else if (arrLetters[linhaAtual - 1][colunaAtual] === 'C') {
        let quadradoY = document.getElementById(`${linhaAtual - 1}-${colunaAtual}`);
        quadradoY.appendChild(player);
        linhaAtual--;
        error.innerHTML = '';
        error.style.visibility = 'hidden';
        player.classList.remove('playerX');
        player.classList.add('playerY');
        player.style.animationName = "slideUp";
        quadradoY.classList.remove('cogumelo');
    } else {
        erro();
    }
}

const verificaDown = () => {
    if (arrLetters[linhaAtual + 1][colunaAtual] === ' ') {
        let quadradoY = document.getElementById(`${linhaAtual + 1}-${colunaAtual}`);
        quadradoY.appendChild(player);
        linhaAtual++;
        error.innerHTML = '';
        error.style.visibility = 'hidden';
        player.classList.remove('playerX');
        player.classList.add('playerY');
        player.style.animationName = "slideDown";
    } else if (arrLetters[linhaAtual + 1][colunaAtual] === 'C') {
        let quadradoY = document.getElementById(`${linhaAtual + 1}-${colunaAtual}`);
        quadradoY.appendChild(player);
        linhaAtual++;
        error.innerHTML = '';
        error.style.visibility = 'hidden';
        player.classList.remove('playerX');
        player.classList.add('playerY');
        player.style.animationName = "slideDown";
        quadradoY.classList.remove('cogumelo');
    } else {
        erro();
    }
}

const verificaLeft = () => {
    if (arrLetters[linhaAtual][colunaAtual - 1] === ' ') {
        let quadradoLado = document.getElementById(`${linhaAtual}-${colunaAtual - 1}`);
        quadradoLado.appendChild(player);
        colunaAtual--;
        error.style.visibility = 'hidden';
        error.innerHTML = '';
        player.classList.add('playerX');
        player.style.animationName = "slideLeft";
    } else if (arrLetters[linhaAtual][colunaAtual - 1] === 'C'){
        let quadradoLado = document.getElementById(`${linhaAtual}-${colunaAtual - 1}`);
        quadradoLado.appendChild(player);
        colunaAtual--;
        error.style.visibility = 'hidden';
        error.innerHTML = '';
        player.classList.add('playerX');
        player.style.animationName = "slideLeft";
        quadradoLado.classList.remove('cogumelo');
    } else{
        erro();
    }
}

const verificaRight = () => {
    if (arrLetters[linhaAtual][colunaAtual + 1] === ' ') {
        let quadradoLado = document.getElementById(`${linhaAtual}-${colunaAtual + 1}`);
        quadradoLado.appendChild(player);
        colunaAtual++;
        error.style.visibility = 'hidden';
        error.innerHTML = '';
        player.classList.add('playerX');
        player.style.animationName = "slideRight";
    } else if (arrLetters[linhaAtual][colunaAtual + 1] === 'F') {
        let quadradoLado = document.getElementById(`${linhaAtual}-${colunaAtual + 1}`);
        quadradoLado.appendChild(player);
        colunaAtual++;
        error.style.visibility = 'hidden';
        error.innerHTML = '';
        player.classList.add('playerX');
        player.style.animationName = "slideRight";
        anunciaVitoria();
    } else if (arrLetters[linhaAtual][colunaAtual + 1] === 'C'){
        let quadradoLado = document.getElementById(`${linhaAtual}-${colunaAtual + 1}`);
        quadradoLado.appendChild(player);
        colunaAtual++;
        error.style.visibility = 'hidden';
        error.innerHTML = '';
        player.classList.add('playerX');
        player.style.animationName = "slideRight";
        quadradoLado.classList.remove('cogumelo');
    } else {
        erro();
    }
}

const verificaTecla = tecla => {
    if (tecla === 'ArrowUp') {
        verificaUp();
    } else if (tecla === 'ArrowDown') {
        verificaDown();
    } else if (tecla === 'ArrowRight') {
        verificaRight();
    } else if (tecla === 'ArrowLeft') {
        verificaLeft();
    }
}
let arrLetters = [];

for (let i = 0; i < map.length; i++) {
    arrLetters.push(map[i].split(''));
}

const iniciaJogo = () => {
    criaDivs(arrLetters);
    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        verificaTecla(keyName);
    });
    btnStart.style.display = 'none';
    arrows.style.display = 'none';
}

btnStart.addEventListener('click', iniciaJogo);
btnAgain.addEventListener('click', zerar = () => {
    document.location.reload();
});