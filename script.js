let order = [];
let clickedOrder = [];
let score = 0;

// 0=verde 1=vermelho 2=amarelo 3=azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () =>{
    let colorOrder = math.floor(Math.random() *4);
    order[order.length] = colorOrder
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) =>{
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() =>{
        element.classList.remove('selected');
    });
}

let checkOrder = () =>{
    for (let i in clickedOrder){
        if (clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length){
        alert(`Pontuacao: ${score}\n Acertou iniciando o proximo nivel`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() =>{
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

}

//funcao que retorna a cor

let createColorElement = (color) => {
    if (color == 0){
        return green;
    }else if (color == 1){
        return red;
    }else if (color == 2){
        return yellow;
    }else if (color == 3){
        return blue;
    }
}

//funcao que retorna o nivel de game

let nextLevel = () => {
    score ++;
    shuffleOrder();
}

//funcao para game over

let gameOver = () => {
    alert(`Pontuacao: $(score)!\n voce perdeu`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () =>{
    alert(`Bem vindo ao Genesis iniciando novo game`);
    score = 0;
    nextLevel();
}

green.addEventListener('click'[0]);
yellow.addEventListener('click'[2]);
blue.addEventListener('click'[3]);
red.addEventListener('click'[1]);

green.onclick = () => click(0);
yellow.onclick = () => click(1);
blue.onclick = () => click(3);
red.onclick = () => click(1);


playGame();

