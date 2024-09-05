/* Contador Simples:

let i = 0
while(i <= 10){
    console.log(i);
    i++
    
}
*/
/* Contador de Pares:

let i = 0
while(i <= 20){
    i++
    if(i%2 === 0){
        console.log(i);
        
    }
}           
*/
/* Tabuada:

let numPergunta = Number(prompt("Insira o número que você deseja saber a tabuada"))
for(let i = 0;i <= 10;i++ ){
    let a = i * numPergunta
    console.log(a);
}
*/
/* Média de Notas:

let num = []
let soma = 0
for(let i = 0; i < 5; i++){
    let perguntaNumero = Number(prompt("Insira um número para a soma"))
    num.push(perguntaNumero)
    soma += num[i]
}
console.log(soma);
*/
/*
let num = []
let media = 0
for(let i = 0; i < 5; i++){
    let perguntaAluno = Number(prompt("Digite a nota de um aluno"))
    num.push(perguntaAluno)
    media += num[i] /= 5
}

console.log(media);
*/
/*
let listaPalavra = ["egito","remexer","controle","pulsar","enviar"]
let letra = prompt("Digite uma letra aleatoria")
*/
/* Validador de CPF:

let cpf = Number(prompt("Insira seu CPF"))
let cpfNovamente = Number(prompt("Insira seu CPF novamente"))
while(cpf !== cpfNovamente){
    for(let i = 0; i < 5; i++){
        cpf = Number(prompt("Insira seu CPF"))
        cpfNovamente = Number(prompt("Insira seu CPF novamente"))
        if(cpf !== cpfNovamente){
            console.log("CPF invalido");
            
        }
        else{
            i=5
        }
    }
}

console.log("Cpf digitado com sucesso");
*/
/*
let cedulas = [1,2,5,10,20,50,100]
let pergunta = Number(prompt("Insira o valor que deseja sacar"))
for(let i = 0 ;i < 7; i++ ){
    pergunta -= cedulas[i]

}
console.log(cedulas);
*/
/*
let numeros = []
let pergunta1 = Number(prompt("Insira um número"))
let pergunta2 = Number(prompt("Insira outro número"))
let pergunta3 = Number(prompt("Insira outro número"))
let pergunta4 = Number(prompt("Insira outro número"))
let pergunta5 = Number(prompt("Insira outro número"))
numeros.push(pergunta1,pergunta2,pergunta3,pergunta4,pergunta5)
console.log(numeros);
*/