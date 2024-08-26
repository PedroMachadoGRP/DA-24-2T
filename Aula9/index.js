/*
let array // variavel vazia
console.log('a.',array);// imprime a variavel vazia
array = null // transforma a variavel em nula
console.log('b.',array); // imprime o atual estado da variavel
array = [3,4,5,6,7,8,9,10,11,12,13] // adiciona uma lista de números de para a variavel array
console.log('c.',array.length); //imprime a quantidade de itens na variavel
let i = 0 // define a variavel i como 0
console.log('d.', array[i]); //imprime a variavel 'array' como uma lista com a variavel 'i'
array[i+1] = 10 // transforma o  número 1 do array em 10
console.log('e.', array); // imprime o estado atual da variavel 'array'
const valor = array[i+6] // seleciona a 6 casa do array
console.log('f.', valor); // imprime o número dito na variavel 'valor'
*/
/*
const frase = prompt("Digite uma frase")// a variavel define uma frase
console.log(frase.toUpperCase().replaceAll("A", "I"),frase.length);// imprime no console a variavel 'frase' com letra maiuscula,trocando as letras 'A' pelas letras 'I' e exibindo a quantidade de letras que existem na frase
//A frase ficara : SUBI NUM ÔNIBUS EM MIRROCOS. e exibira 27 letras
*/
/*
let nomeUsuario = prompt("Qual o seu nome?")
let emailUsuario = prompt("Insira o seu email")
console.log(`O email ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o),${nomeUsuario}`);
*/
/*
let comidasFavoritas = ["Pizza","Hamburger","Batata-frita","Massa","Arroz"] // lista de comidas favoritas
console.log(comidasFavoritas); // imprime a lista
console.log(`Essa são minhas comidas favoritas 
     \n${comidasFavoritas [0]} 
     \n${comidasFavoritas[1] } 
     \n${comidasFavoritas[2]} 
     \n${comidasFavoritas[3]}
     \n${comidasFavoritas[4]}`); // imprime a lista em com cada item um em cima do outro
let comidaUsuario = prompt("Qual a sua comida favorita") // pergunta ao usuario 
let i = 0 // define a variavel 1 como o primeiro da lista de comidas
comidasFavoritas[i + 1] = comidaUsuario // define a resposta do usuario como o 2 item da lista de comidas
console.log(comidasFavoritas); // imprime a nova lista de comidas
*/
/*
let listaDeTarefas = []
let pergunta = prompt("Insira uma tarefa que você não cumpriu")
let pergunta1 = prompt("Insira uma segunda tarefa que você não cumpriu")
let pergunta2 = prompt("Insira uma terceira tarefa que você não cumpriu")
listaDeTarefas.push(pergunta,pergunta1,pergunta2)
console.log(listaDeTarefas);
let tarefaRealizada = prompt("Insira o indice da tarefa que você ja realizou")
listaDeTarefas.splice(tarefaRealizada,1)
console.log(listaDeTarefas);
*/
/*
let frase = prompt("Digite uma frase")
let array = frase.split(" ")
console.log(array);
*/

