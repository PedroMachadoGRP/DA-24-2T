/*
let valor = 0 //Variavel de valor que equivale á zero
for(let i = 0; i< 5; i++){ // Laço de repetição que soma mais 1 para a variavel "i"
    valor += i //Soma a variavel "valor" com a variavel "i"
}
console.log(valor); //Imprime no console o atual valor da variavel "valor"
*/
/*
const lista = [10,11,12,15,18,19,21,23,25,27,30]
for(let numero of lista){
    if(numero > 18){
        console.log(numero);
        //Sera imprimido no console  os número do array acima de 18
    }
}
*/
/*b) Se eu quisesse acessar o índice de cada elemento dessa
lista, o for...of... é suficiente? Se sim, o que poderia ser
usado para fazer isso? */
//não
/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asterisco = 0; asterisco < quantidadeAtual + 1; asterisco++){
        linha += "*"

    }
    console.log(linha);
    quantidadeAtual++
}
//Caso o usúario digitar 4 o programa ira imprimir uma 4 linhas com "*" aumentando 1 para cada linha
*/
/*
let bichinhos = Number(prompt("Quantos bichinhos você tem?"))
let listaBichinhos = []
if (bichinhos === 0) {
    console.log("Que pena!Você pode adotar um pet!");
} else if (bichinhos > 0) {
    
    for (let listaBichinho = 0; listaBichinho < bichinhos; listaBichinho++) {
        let nomeBichinhos = prompt("Insira o nome de seu bichinhos")

        listaBichinhos.push(nomeBichinhos)

    }
    console.log(listaBichinhos)
}
*/
/*
let arrayOriginal = [10, 20, 30, 40, 50]
let divisao = 10
*/
/*
for(let array of arrayOriginal){
    console.log(array);
    
}
*/
/*
for(let array = 0; array<5;array++){
     arrayOriginal[array] /= divisao
}
console.log(arrayOriginal);
*/
/*
let arrayPares = []
for(let i = 0; i < 5; i++){
    if(arrayOriginal[i]%2 === 0){
        arrayPares.push(arrayOriginal[i])
    }
}
console.log(arrayPares);
*/
/*
let arrayString = ["Fazer", "um", "bolo", "é", "definitivamente", "dificil"]
for (let i = 0; i < 6; i++) {
    arrayString.length[i]
    console.log(`O elemento do índex ${arrayString[i].length} é: ${arrayString[i]}`);
}
*/
/*
let numeroMaior = arrayOriginal[0]
for(let i = 0; i< 5;i++){
    if(numeroMaior < arrayOriginal[i]){
        numeroMaior = arrayOriginal[i]
    }
}
console.log(numeroMaior);
*/
/*
let numeroMenor = arrayOriginal[0]
for(let i = 0; i < 5; i++){
    if(numeroMenor > arrayOriginal[i]){
        numeroMenor = arrayOriginal[i]
    }
}
console.log(numeroMenor);
*/