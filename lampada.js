"use strict"

const lampada = document.getElementById("lampada")

let idInterval

//Funções

function botoesLigaDesliga(ligarEstado, desligarEstado) {
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")
    ligar.disabled = ligarEstado
    desligar.disabled = desligarEstado
}

// function lampadaQuebrada() {
//     return document.getElementById("lampada").src.indexOf("quebrada") !== -1
// }

const lampadaQuebrada = () => lampada.src.indexOf("quebrada") !== -1

function ligarLampada() {
    // const lampada = document.getElementById("lampada")

    if (!lampadaQuebrada()) {
        lampada.src = "img/ligada.jpg"
        botoesLigaDesliga(true, false)
    }
}

function desligarLampada() {
    // const lampada = document.getElementById("lampada")

    if (!lampadaQuebrada()) {
        lampada.src = "img/desligada.jpg"
        botoesLigaDesliga(false, true)
    }
}

function quebrarLampada() {
    // const lampada = document.getElementById("lampada")

    if (!lampadaQuebrada()) {
        lampada.src = "img/quebrada.jpg"
        botoesLigaDesliga(true, true)
    }
}

// function lampadaDesligada() {
//     return lampada.src.includes("desligada")
// }

const lampadaDesligada = () => lampada.src.includes("desligada")

function trocarImagem() {
    if (lampadaDesligada()) {
        ligarLampada()
    } else {
        desligarLampada()
    }
}

function piscar() {
    const piscar = document.getElementById("piscar")

    if (piscar.textContent == "Piscar") {
        piscar.textContent = "Parar"
        piscar.className = "parar"
        idInterval = setInterval(trocarImagem, 150)

    } else {
        clearInterval(idInterval)
        piscar.textContent = "Piscar"
        piscar.className = "piscar"
    }

}

//Eventos

document.getElementById("ligar")
    .addEventListener("click", ligarLampada)

document.getElementById("desligar")
    .addEventListener("click", desligarLampada)

document.getElementById("lampada")
    .addEventListener("dblclick", quebrarLampada)

document.getElementById("lampada")
    .addEventListener("mouseover", ligarLampada)

document.getElementById("lampada")
    .addEventListener("mouseleave", desligarLampada)

document.getElementById("piscar")
    .addEventListener("click", piscar)

