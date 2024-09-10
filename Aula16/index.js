/*
function minhaFuncao(variavel){
    return variavel * 5
}
console.log(minhaFuncao(2));
console.log(minhaFuncao(10));
*/

//Será imprimido no primeiro console: 10. e na segunda sera 50
//não exibiria nada no console
/*
let textoDoUsuario = prompt("Insira um texto")
const outrafuncao = function(texto){
    return texto.toLowerCase().includes("cenoura")
}
const resposta = outrafuncao(textoDoUsuario)
console.log(resposta);
//A utilidade da função é deixar o texto todo em minusculo e verificar se na frase contem a palavra
//será imprimido no console as trÊs como true
*/
/*
function ola(){
    console.log("Eu sou Pedro, tenho 18 anos, moro em São Leopoldo e sou estudante");
    
}
ola()
*/
/*
let verd = true
let fals = false
//Soma
function soma(num1,num2){
    return num1 + num2
}
console.log(soma(1,2));
*/
/*
//Maior ou Menor
function maiorMenor(num3,num4){
    if(num3 >= num4 ){
        console.log(verd);
        
    }else{
        console.log(fals);
        
    }
}
*/
/*
maiorMenor(1,2)
//Par ou Impar
function parImpar(num5){
    if(num5%2 === 0){
        console.log(verd);
        
    }else{
        console.log(fals);
        
    }
}
parImpar(1)
*/
/*
//Texto para maiusculo e tamanho do texto
let textoDoUsuario = prompt("Insira um texto")
const mensagem = function (texto){
    console.log(texto.toUpperCase());
    console.log(texto.length);
}
const textoInteiro = mensagem(textoDoUsuario)
*/
/*
let num1 = Number(prompt("Insira um número"))
let num2 = Number(prompt("Insira outro número"))
const operacaoBasicas = function(num1,num2){
    let soma = num1 + num2
    let sub = num1 - num2
    let multi = num1 * num2
    let div = num1 / num2
    console.log(`Número inserido: ${num1} e ${num2} 
        \nSoma: ${soma}
        \nDiferença: ${sub}
        \nMultiplicação: ${multi}
        \nDivisão: ${div}`);
    
}
const resultados = operacaoBasicas(num1,num2)
*/
/*
//Chamando número com arrow function
const numeros = (num1) =>{
    console.log(num1);
    
}
numeros(1)

const dados = (num2,num3) =>{
    const soma = num2 + num3
    numeros(soma)
}
dados(1,2)
*/
/*
let iniciar = true
let inventarios = []
const adicionarItem = function (inventario, item) {
    inventario.push(item)
    console.log(`O item: ${item} foi adicionado ao inveteraio`);
}
const removerItem = function (inventario, item) {
    inventario.splice(item, 1)
    console.log(`O item ${item} foi removido do inventario`);
}
const exibirInventario = function(inventario){
    for(let inventarios of inventario){
        console.log(inventarios);
        
    }
      
}
while (iniciar) {

    let oque = prompt("Digite: \n1 para adicionar item \n2 para remover item \n3 para listar o inventario e \n4 para sair")

    switch (oque) {
        case "1":
            let itemInventario = prompt("Insira um item pra adicionar ao inventario")
            adicionarItem(inventarios,itemInventario)

            break
        case "2":
            let itemRemover = prompt("Insira o item que deseja remover")
            removerItem(inventarios,itemRemover)
            break

        case "3":
            exibirInventario(inventarios)
            break
        case "4":
            iniciar = false
            break
    }
}
*/