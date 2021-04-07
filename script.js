//Carne = 300g por pessoa  >= 5 horas = 400g
//Cerveja = 1000ml por pessoa  >= 5 horas = 1300ml
//Refrigerante = 300ml por pessoa >= 5 horas 500ml
//Água = 200ml por pessoa >= 5 horas 400ml
//Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputNaoBebe = document.getElementById("naobebe");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");
    
    let adultos = inputAdultos.value;
    let naobebe = inputNaoBebe.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)) * naobebe + (carnePP(duracao)) / 2 * criancas * duracao;
    let qtdTotalCerveja = cervejaPP(duracao) * adultos * duracao;
    let qtdTotalAgua = aguaPP(duracao) * adultos + (aguaPP(duracao)) * naobebe + (aguaPP(duracao)) / 2 * criancas * duracao;
    let qtdTotalRefri = refriPP(duracao) * adultos + (refriPP(duracao)) * naobebe + (refriPP(duracao)) / 2 * criancas * duracao;

    resultado.innerHTML = `<h2 class="h2resultado">Você vai precisar comprar:<h2>`

    resultado.innerHTML += `<ul>
                               <li class="li1">&nbsp;${qtdTotalCarne / 1000} Kg de Carne</li>
                               <li class="li2">${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</li>
                               <li class="li3">${Math.ceil(qtdTotalAgua / 2000)} Litros de Água</li>
                               <li class="li4">${Math.ceil(qtdTotalRefri / 2000)} Litros de Refrigerante</li>
                            </ul>` 

}

function carnePP(duracao) {
    if (duracao >= 5) {
        return 400;
    }else {
        return 300;
    }    
}
function cervejaPP(duracao) {
    if (duracao >= 5) {
        return 1300;
    }else {
        return 1000;
    }
}
function aguaPP(duracao) {
    if (duracao >= 5) {
        return 400;
    }else {
        return 200;
    }
}
function refriPP(duracao){
    if (duracao >= 5) {
        return 500;
    }else {
        return 300;
    }
}

//Página do formulário
function formSugestao(){
    
    window.open("https://forms.gle/HrECe6pV6hR4RP6MA", "_blank");
  //window.location.href = "https://forms.gle/HrECe6pV6hR4RP6MA";
}
