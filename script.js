

let form = document.querySelector("#form")
let formAcao = document.querySelector("#acao")
let resultado = document.querySelector("#resultado")

let count = 1;

form.addEventListener('submit', function alterarResultado(event) {
    event.preventDefault()


    let texto = form.querySelector("#entrada").value
    texto = texto.toUpperCase()

    let item = document.createElement("li")
    item.textContent = texto
    item.dataset.ordem = count

    // item.style.backgroundColor = "red"

    resultado.querySelector("ol").appendChild(item)

    count++;
})

formAcao.addEventListener('submit', function realizarAcao(event) {
    event.preventDefault()

    let numItem = formAcao.querySelector("input").value

    let item = document.querySelector(`[data-ordem="${numItem}"]`)
    item.style.color = 'blue'

    console.log(numItem)
})