const botaoRock = document.querySelector("#rock")
const botaoPaper = document.querySelector("#paper")
const botaoTesoura = document.querySelector("#scissors")
const resultado = document.querySelector(".resultado")
const meusPontos = document.querySelector("#meus-pontos")
const pontosAdversario = document.querySelector("#pontos-maquina")

let pontosHumano = 0
let pontosMaquina = 0

const playHumano = (escolhaHumano) =>{
    jogarJogo(escolhaHumano, playMaquina())
}

const playMaquina = () =>{
    const escolhas = ['rock', 'paper', 'scissors']

    const numerosAleatorios = Math.floor(Math.random()*3)

    return escolhas[numerosAleatorios]
}

const jogarJogo = (humano, maquina) =>{
    console.log('Humano :' + humano + ' Maquina :' + maquina)
    if(humano === maquina){
        resultado.innerHTML = 'Deu empate'
    } else if((humano === 'paper' && maquina === 'rock')|| (humano === 'rock' && maquina === 'scissors') || (humano === 'scissors' && maquina === 'paper')){
        pontosHumano++
        meusPontos.innerHTML = pontosHumano 
        resultado.innerHTML = 'Você ganhou'
    } else{
        pontosMaquina++
        pontosAdversario.innerHTML = pontosMaquina
        resultado.innerHTML = 'Você Perdeu'
    }
}

botaoRock.addEventListener('click', () => playHumano('rock'))
botaoPaper.addEventListener('click', () => playHumano('paper'))
botaoTesoura.addEventListener('click', () => playHumano('scissors'))