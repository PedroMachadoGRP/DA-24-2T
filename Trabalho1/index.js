//Algoritmo de impar ou par.

//O algoritmo deve fazer uma divisão e uma comparação se o resto da conta for igual a zero.Se o resultado for 0 ou -0 o resultado deve ser par caso o contrario deve ser impar

//entrada de informação.
let num = prompt("Insira o número que deseja que seja dito se é impar ou par") // Pede ao usuario que insira um número
//Se utiliza a expressão "/" como divisão para o resto do resultado.
let imparPar = num/2 //divide o número fornecido pelo usuario pro 2 

/*algoritmo para calculo de impar ou par.
Caso não for usada a expressão "%" que pode definir o resto da conta o algoritmo definira todas como impar,pois não compara com o resto da expressão.
Foi utilizado uma segunda comparação com "-0" para a definição de números negativos.
*/
if(num % 2 == 0 && num % 2 == -0) { //compara o número fornecido pelo usuario com o seu resto para resultar em par ou impar
    alert('Seu número é par') // emite uma mensagem dizendo se o número fornceido é par
}
else{
    alert('Seu número é impar') // emite uma mensagem dizendo se o número forncido é impar
}

