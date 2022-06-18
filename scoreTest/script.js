let mais = document.getElementById('mais');
let menos = document.getElementById('menos');
let reniciar = document.getElementById('reiniciar');
let numeroInicial = 0 ;
const pontos = document.getElementById('pontos');

function acrescentar() {
    numeroInicial = numeroInicial + 1
    pontuacao()
}

function diminuir() {
    numeroInicial = numeroInicial - 1
    pontuacao()
}

function zerar() {
    numeroInicial = 0
    pontuacao()
}

function pontuacao() {
    pontos.innerText = numeroInicial
}

pontuacao()

mais.addEventListener('click', acrescentar)
menos.addEventListener('click', diminuir)
reniciar.addEventListener('click', zerar)