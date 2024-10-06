/*
const primeiroValor = false                     
const segundoValor = false                      
const resultado = primeiroValor && segundoValor
console.log(resultado);
*/

/*
const a = true
const b = false
const c = true

const resultado = a &&  b
console.log(resultado);

const resultado1 = b && c
console.log(resultado1);

const resultado2 = a&&c
console.log(resultado2);

const resulatdo3 = a&&b&&c
console.log(resulatdo3);
*/

/*
const primeiroValor = false
const segundoValor = true
const resulatdo = primeiroValor || segundoValor
console.log(resulatdo);
*/

/*
const a = true
const b = false
const c = true

const resultado = a || b 
console.log(resultado);

const resulatdo1 = b || c
console.log(resulatdo1);

const resulatdo2 = a || c 
console.log(resulatdo2);

const resulatdo3 = a||b||c
console.log(resulatdo3);
*/

/*
const primeiroValor = true
const resulatdo = !primeiroValor
console.log(resulatdo);
*/

/*
let nome = prompt("Qual é o seu nome?")
let anoNascimento = prompt("Qual o ano do seu nacimento")
let anoNascimento1 = Number(anoNascimento)
let anoAtual = prompt("Em que ano você está?")
let anoAtual1 = Number(anoAtual)
let idade = anoAtual - anoNascimento
let maiorIdade = idade >= 18
let idadeFuturo = 2050 - anoAtual + idade

console.log("Seu nome é",nome,"\nSua idade é: ",idade,"\né maior de idade? (True/False)", maiorIdade,"\nEstamos em ",anoAtual,"\nSua idade em 2050 será:",idadeFuturo );
*/


/*
Exercícios de interpretação de código.
1) Leia o código abaixo. Indique todas as mensagens impressas no console,
SEM EXECUTAR o programa.

const bool1 = true // define a variavel como verdadeira
const bool2 = false // define essa variavel como falsa
const bool3 = !bool2 //define como o oposto da variavel

let resulatdo = bool1 && bool2 // compara se as duas variaveis são true caso contrario retornara false
console.log("a. ", resulatdo); // imprime no console o resultado da variavel resultado

resulatdo = bool1 && bool2 && bool3 //troca o valor da variavel "resultado" para que as três variaveis bool1,2 3 sejam inseridas
console.log("b. ",resulatdo); // imprime no console o resultado da variavel "resultado"

resulatdo = !resulatdo && (bool1||bool2) // compara se o oposta da variavel "resultado" tem equivalencia do resultado do parenteses
console.log("c. ",resulatdo); // imprime no console o resultado da variavel "resultado"

console.log("d. ",typeof resulatdo);// imprime no console o tipo da variavel "resultado"
*/

/*
Exercícios de interpretação de código.
2) Seu colega se aproxima de você falando que o código dele não funciona como
devia. Vamos ajudá-lo: consegue perceber algum problema? O que será impresso
no console?

let primeiroNumero = prompt("Digite um número!")//Pede ao usuario para inserir um número
//O codigo está errado porque a variavel não vira com number e sim como strig. O jeito correto de usar seria : Number(prompt("Digite um número!"))
let segundoNumero = prompt("Digite outro numero") // Pede ao usuario para inserir outro número
//O codigo está errado porque a variavel não vira com number e sim como strig.O jeito certo de se usar seria : Number(prompt("Digite outro numero"))
const soma = primeiroNumero + segundoNumero
// o codigo está somando duas strings não dois numbers
console.log(soma);
*/
/*

Exercícios de escrita de código

1) Faça um programa que:

a) Pergunte a idade do usuário;
b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga;
c) Imprima no console a seguinte mensagem: "Sua idade é maior do que a do
seu melhor amigo?", seguido pela resposta (true ou false)
d) Imprima no console a diferença de idade (não tem problema se sair um
número negativo)

let idade = Number(prompt("Insira sua idade")) // Pergunta a idade do usuario ao mesmo tempo que a transforma em Number
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo/amiga?")) //Pergunta a idade do amigo do usuario e a transforma em Number
let comparacao = idade >= idadeAmigo // Compara se a idade do usuario é maior ou igual a do amigo
let diferenca = idade - idadeAmigo // Calcula a diferença entre a idade do usuario e do amigo
console.log("Sua idade é maior do que a do seu melhor amigo? True/False ", comparacao); // imprime no console se a idade do usuario é maior que do amigo com True/False
console.log("A diferença de idade entre você e seu amigo/amiga é de: ", diferenca); // Imprime no console a diferença de idade do usuario com o do amigo
*/

/*
let par = Number(prompt("Insira um número par")) // Requisita para o usuario um número que seja par
let resto = par % 2 //divide o resto do número inserido pelo usuario por 2
console.log(resto); // imprime o resultado da variavel "resto" no console
//caso for usado um número par o resultado no console sempre será 0, caso utilizar um número impar o resultado sempre sera 1
*/

/*
let idade = Number(prompt("Insira sua idade"))
let idadeMeses = idade * 12
let idadeDias = idade * 365
let idadeHoras = idade * 8760
console.log(" Sua idade em meses é: ",idadeMeses,"\n Sua idade em dias é: ",idadeDias,"\n Sua idade em horas são:",idadeHoras);
*/


/*
let num1 = Number(prompt("Insira um número")) // Pergunta ao usuario um número
let num2 = Number(prompt("Insira outro número")) // Pergunta ao usuario outro número
let comparacao1 = num1 >= num2 // compara se o primeiro número é maior ou igual ao segundo
let comparacao2 = num1 === num2 // compara se ambos os números são iguais
let comparacao3 = num1 % num2 // caulcula o resto da divisão dos números
let comparacao4 = num2 % num1 // calcula o resto da divisão dos números ao contrario
let comparacao5 = comparacao3 === 0 // compara o resultado do calculo dos números com zero para saber se são divisiveis
let comparacao6 = comparacao4 === 0  // compara o resultado do calculo dos números ao contrario com zero para saber se são divisiveis
console.log("O primeiro numero é maior que segundo? True/False",comparacao1,"\nO primeiro numero é igual ao segundo? True/False", comparacao2, "\nO primeiro numero é divisível pelo segundo? True/False",comparacao5, "\nO segundo numero é divisível pelo primeiro? True/False",comparacao6); // imprime o resultado de todos os algoritmos anteriores no console
*/

/*
alert("Aperte ctr + j para abrir o console")
pergunta1 // variavel vazia
let fahrenheitKelvin = (pergunta1 - 32)*5 //Formula para transformar fahrenheit em kelvin
let fahrenheitKelvin1 = fahrenheitKelvin / 9 //Formula para transformar fahrenheit em kelvin 
let fahrenheitKelvin3 = fahrenheitKelvin1 + 273.15 + "Kelvin" //Formula para transformar fahrenheit em kelvin 

pergunta2 
let celsiusFahrenhei = 9/5 * (pergunta2)  //Formula para transformar celsius em fahrenheit
let celsiusFahrenhei1 = celsiusFahrenhei + 32 + "Fahrenheit" //Formula para transformar celsius em fahrenheit
let celsiusKelvin = pergunta2 + 273.15 + "Kelvin" // Formula para transformar celsius em kelvin
*/

//Pergunta a
/*
pergunta1 = 77
let fahrenheitKelvin = (pergunta1 - 32)*5 //Formula para transformar fahrenheit em kelvin
let fahrenheitKelvin1 = fahrenheitKelvin / 9 //Formula para transformar fahrenheit em kelvin 
let fahrenheitKelvin3 = fahrenheitKelvin1 + 273.15 +  "Kelvin" //Formula para transformar fahrenheit em kelvin 
console.log(fahrenheitKelvin3);
*/
/*Pergunta b 
pergunta2 = 80
let celsiusFahrenhei = 9/5 * (pergunta2)  //Formula para transformar celsius em fahrenheit
let celsiusFahrenhei1 = celsiusFahrenhei + 32 +  "Fahrenheit" //Formula para transformar celsius em fahrenheit
console.log(celsiusFahrenhei1);

*/
/*
//Pergunta c 
pergunta2 = 30
let celsiusFahrenhei = 9/5 * (pergunta2)  //Formula para transformar celsius em fahrenheit
let celsiusFahrenhei1 = celsiusFahrenhei + 32 +  "Fahrenheit" //Formula para transformar celsius em fahrenheit
console.log(celsiusFahrenhei1);
let celsiusKelvin = pergunta2 + 273.15 +  "Kelvin" // Formula para transformar celsius em kelvin

console.log(celsiusKelvin);
*/
//Pergunta d
/*
pergunta2 = Number(prompt("Insira um número que será convertido de celsius para fahrenheit e kelvin"))
let celsiusFahrenhei = 9/5 * (pergunta2)  //Formula para transformar celsius em fahrenheit
let celsiusFahrenhei1 = celsiusFahrenhei + 32 +  "Fahrenheit" //Formula para transformar celsius em fahrenheit
console.log(celsiusFahrenhei1);
let celsiusKelvin = pergunta2 + 273.15 +  "Kelvin" // Formula para transformar celsius em kelvin

console.log(celsiusKelvin);
*/


