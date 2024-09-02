/*
let i = 0;
while(i<=10){
    console.log("O número é :", i);
    i++
}
*/
/*
let estomago = 0
while (estomago < 100){
    console.log("Quero comer mais coxinhas",estomago);
    estomago = estomago + 10                                                                                                    
}
*/
/*
let perguntaUsuario = 10
let soma = 0
while(perguntaUsuario !== 0){
    perguntaUsuario = Number(prompt("Insira um número"))
    soma += perguntaUsuario
    console.log("Número", perguntaUsuario, "recebido")
}
console.log("O valor total foi", soma);
*/
/*
let c = 1
do{
    console.log("O valor do contador é", c);
    c++
}while(c <= 6){

}
*/
/*
const numeros = [14,67,89,15,23]
for(let i = 0;i< 5; i++ ){
    const elemento = numeros[i]
    console.log(elemento);
    
}
*/
/*
let numeros = [11,15,18,14,12,13]
let numeroMaior = numeros[0]
for(let i = 0;i < 6; i++ ){
    if(numeroMaior<numeros[i]){
        numeroMaior=numeros[i]
    }
}
console.log("O maior número é: ", numeroMaior);
*/
/*
let numeros = [11,15,18,14,12,13]
let soma = 0
for(let i = 0; i<6; i++){
    if( numeros[i]%2 === 0){
        soma += numeros[i]
    }
}
console.log("A soma dos números do array é",soma );
*/
/*
const numeros = [14,67,89,15,23]
for(let numero of numeros){
    console.log(numero);
    
}
*/
/*
let palavras = ["Oi","sumido","tudo","bem?","Saudades"]
let frase =" "
for(let palavra of palavras){
    frase += palavra+ " "
}
console.log(frase);
*/
/*
let numeros =[11,15,18,14,12,13]
let soma = 0
for(let numero of numeros){
    let resultado = numero %2
    if(resultado === 0){
        soma += numero
    }
}
console.log("A soma dos número do array é : ", soma);
*/
/*
let palavras = ["gato","papagaio","avestruz","cachorro","tubarão"]
let palavraMaisLonga = [palavras[0]]
for(let palavra of palavras){
    if(palavraMaisLonga.length[0] < palavra.length){
        palavraMaisLonga.push(palavra)
        
    }
}
console.log(palavraMaisLonga);
*/