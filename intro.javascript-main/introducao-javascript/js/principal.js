//console.log("O arquivo separado está funcionando");

//......................Daqui para baixo começa o código

//Alteração do titulo
//console.log(document);
//cria a variavel titulo e armazena o conteudo da classe
let titulo = document.querySelector(".titulo");
//console.log(titulo);
//atribuição de um novo valor na variavel titulo
titulo.textContent = "Fake Natty Nutrição!";

//Alteração da tabela
let paciente = document.querySelector("#primeiro-paciente")

let tdPeso =paciente.querySelector(".info-peso");
let tdAltura =paciente.querySelector(".info-altura");

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura * altura);
console.log(imc)