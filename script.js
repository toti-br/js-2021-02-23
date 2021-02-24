

let entrada = document.querySelector("#entrada")
let resultado = document.querySelector("#resultado")


let acoes = {
    caps: caps,
    tracejar: tracejar,
    textoAzul,
    textoMaior

}

registrarAcoes()

function registrarAcoes() {
    let btnAcoes = document.querySelectorAll("#acoes [data-acao]")

    for (let btn of btnAcoes) {
        btn.addEventListener("click", executarAcao.bind(this, [btn.dataset.acao]))
    }
}

function executarAcao(acao) {
   resultado.innerHTML =  acoes[acao](entrada.value)
}

function caps(entrada) {
    return entrada.toUpperCase()
}

function tracejar(entrada) {
    return entrada.split('').join('-')
}

function textoAzul(entrada) {
    return '<spam style="color:blue">' + entrada +'</spam>'
}

function textoMaior(entrada) {
    return '<spam style= "font-size: 300px">' + entrada +'</spam>'
}