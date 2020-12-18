/* Declarações */
const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW W WWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
const section = document.getElementById('section');
const body = document.getElementById('body');
let linhaAtual = 0;
let colunaAtual = 0;
const player = document.createElement('div');
player.classList.add('player');
const btnStart = document.getElementById('btnStart');
let error = document.createElement('div');
error.classList.add('erro');

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
    error.innerText = 'Você bateu na parede!';
}

const verificaUp = () => {
    if (arrLetters[linhaAtual - 1][colunaAtual] === ' ') {
        let quadradoY = document.getElementById(`${linhaAtual - 1}-${colunaAtual}`);
        quadradoY.appendChild(player);
        linhaAtual--;
        error.innerHTML = '';
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
    } else {
        erro();
    }
}

const verificaLeft = () => {
    if (arrLetters[linhaAtual][colunaAtual - 1] === ' ') {
        let quadradoLado = document.getElementById(`${linhaAtual}-${colunaAtual - 1}`);
        quadradoLado.appendChild(player);
        colunaAtual--;
        error.innerHTML = '';
    } else {
        erro();
    }
}

const verificaRight = () => {
    if (arrLetters[linhaAtual][colunaAtual + 1] === ' ') {
        let quadradoLado = document.getElementById(`${linhaAtual}-${colunaAtual + 1}`);
        quadradoLado.appendChild(player);
        colunaAtual++;
        error.innerHTML = '';
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
}

btnStart.addEventListener('click', iniciaJogo);