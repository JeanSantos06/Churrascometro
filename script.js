// Carne - 400 gr por pessoa  + de 6 horas - 650
// Cerveja - 1200 ml por pessoa  + de 6 horas + 2000ml
//Refrigerante/agua + 1000 ml por pessoa  + de 6 horas 1500

// crianças valem por 0,5


let inputAdulto = document.getElementById("adulto")
let inputCrianca = document.getElementById("crianca")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular (){

    let adultos = inputAdulto.value
    let criancas = inputCrianca.value
    let duracao = inputDuracao.value

    let qtdCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let qtdCerveja = cervejaPP(duracao) * adultos
    let qtdBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas)

    resultado.innerHTML = `<p>${qtdCarne / 1000} kilos de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdCerveja / 350)} latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdBebida / 1000)} litros de refrigerante ou água</p>`
}

function carnePP (duracao){
    if (duracao >= 6){
        return 650
    }
    else {
        return 400
    }
}

function cervejaPP (duracao){
    if (duracao >= 6){
        return 2000
    }
    else {
        return 1200
    }
}

function bebidaPP (duracao){
    if (duracao >= 6){
        return 1500
    }
    else {
        return 1000
    }
}