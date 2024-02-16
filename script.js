const botaoRock = document.querySelector("#rock")
const botaoPaper = document.querySelector("#paper")
const botaoTesoura = document.querySelector("#scissors")
const resultado = document.querySelector(".resultado")
const meusPontos = document.querySelector("#meus-pontos")
const pontosAdversario = document.querySelector("#pontos-maquina")

let pontosHumano = 0
let pontosMaquina = 0

const GAME_OPTION = {
    PEDRA: 'rock',
    PAPEL: 'paper',
    TESOURA: 'scissors'
}

const playHumano = (escolhaHumano) =>{
    jogarJogo(escolhaHumano, playMaquina())
}

const playMaquina = () =>{
    const escolhas = [GAME_OPTION.PEDRA, GAME_OPTION.PAPEL, GAME_OPTION.TESOURA]

    const numerosAleatorios = Math.floor(Math.random()*3)

    return escolhas[numerosAleatorios]
}

const jogarJogo = (humano, maquina) =>{
    console.log('Humano :' + humano + ' Maquina :' + maquina)
    if(humano === maquina){
        resultado.innerHTML = 'Deu empate'
    } else if((humano === GAME_OPTION.PAPEL && maquina === GAME_OPTION.PEDRA)|| (humano === GAME_OPTION.PEDRA && maquina === GAME_OPTION.TESOURA) || (humano === GAME_OPTION.TESOURA && maquina === GAME_OPTION.PAPEL)){
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