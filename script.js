

let entrada = document.querySelector("#entrada")
let resultado = document.querySelector("#resultado")


let acoes = {
    caps: caps,
    tracejar: tracejar,
    sublinhar: sublinhar,
    textoAzul,
    retroStyle,

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

function sublinhar(entrada) {
    return '<u>' + entrada +'</u>' 
}

function textoAzul(entrada) {
    return '<span style="color:blue">' + entrada +'</span>'
}

function retroStyle (entrada) {
    return `<span style="font-family: 'DotGothic16', sans-serif; 
                        background-color: black;
                        color: rgb(36, 255, 7);
                        line-height: 6vw;
                        font-size: 40px;">` + entrada + '</span>'
}