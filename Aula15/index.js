/*
function calcularArea(largura, altura) {
    const area = largura * altura
    console.log(area);
}
calcularArea(2, 3)
calcularArea(5,4)
calcularArea(-42,17)
*/
/*
function imprimirOlaMundo(){
    console.log("Ola! Mundo")
}
imprimirOlaMundo()
imprimirOlaMundo()
imprimirOlaMundo()
*/
/*
function imprimirNome(nome){
    console.log("Bem vindo:", nome);
}
imprimirNome("Pedro")
imprimirNome("Rebeca")
imprimirNome("João")
*/
/*
function bemVindo() {
    console.log("Bem vindo Turma 24-2T!");
}
bemVindo()
*/
/*
function soma(num1, num2) {
    const soma = num1 + num2
    console.log("A soma é:", soma);
}
soma(1, 1)
*/
/*
function dobro(num3) {
    const dobro = num3 + num3
    console.log("O dobro de", num3, "é", dobro);
}
dobro(9)
*/
/*
function nomes(nome){
    console.log(`Ola ${nome}`);
}
nomes("Pedro")
nomes("Julia")
nomes("Caio")
*/
/*
function soma(num1,num2){
    const soma = num1 + num2 
    console.log(`A soma é ${soma}`);
}
soma(1,2)
soma(5,15)
*/
/*
function bomDia(nome){
    console.log(`Ola ${nome} bom dia!, como você tá? dormiu bem? acordou cedo? almoçou hoje?`);
}
bomDia("THAÍSSA")
*/
/*
function calcularArea(largura,altura){
    const resultadoArea = largura * altura
    return resultadoArea
}
const area = calcularArea(2,5)
console.log("A area é ", area);
*/
/*
function soma(num1,num2){
    const soma = num1 + num2
    return soma
}
const resultado = soma(5,6)
console.log("O resultado da soma é ", resultado);
*/
/*
const numeros = [1,2,3,4,5,6]
function PrimeiroEUltimo(arryNumeros){
    const novoArray = []
    novoArray.push(arryNumeros[0])
    novoArray.push(arryNumeros[arryNumeros.length-1])
    return novoArray
}
console.log(PrimeiroEUltimo(numeros));
*/
/*
const CalculaArea = function(largura,altura){
    const soma = largura * altura
    return soma
}
const resultado = CalculaArea(2,5)
*/
/*
const imprimirNome = function(nome){
    console.log("Bem vindo:", nome);
}
imprimirNome("Pedro")
*/
/*
const calcularArea = (largura,altura) =>{
    const resultado = largura * altura
    return resultado
}
const area = calcularArea(2,7)
console.log("A area é:",area);
*/
/*
const soma = function(num1,num2){
    const soma = num1 + num2 
    return soma
}
const resultado = soma(1,2)
console.log(resultado);
*/
/*
const dobro = (num1) => {
    const dobrar = num1 + num1
    return dobrar
}
const dobroResultado = dobro(9)
console.log(dobroResultado);
*/
/*
function determinaMonstros(temPeleGelada,TransformaComLuaCheia,brilhaAoSol,temSedeDeSangue){
    if(temPeleGelada === "Sim" && temSedeDeSangue === "Sim" && brilhaAoSol === "Sim"){
        console.log("O seu monstro é um: Vampiro ");
    }else if(TransformaComLuaCheia === "Sim" && temSedeDeSangue === "Sim"){
        console.log("Seu monstro é um: Lobisomen");
    }else{
        console.log("Sua critatura é um humano");
        
    }
}
let pergunta1 = prompt("Sua critaura tem Pele Gelada?")
let pergunta2 = prompt("Sua critaura Transforma Com Lua Cheia?")
let pergunta3 = prompt("Sua critaura brilha Ao Sol?")
let pergunta4 = prompt("Sua critaura tem Sede De Sangue?")
determinaMonstros(pergunta1,pergunta2,pergunta3,pergunta4)
*/