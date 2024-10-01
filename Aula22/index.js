/*
let numeros = [1,2,3,4,5];
let soma; //A escrita certa seria let soma = 0
for(let i = 0 ;i<numeros.length;i++){
    soma +=numeros[i]
}
console.log(soma);
//O erro ocorre porque a variavel soma não foi inicializada
*/
/*
function fatoria(n){
    let resultado = 1;
    for(let i = n;i> 0 ;i--){
        resultado*=i
    }
    return resultado
}
console.log(fatoria(5)); //Esperado 120

//|-----------------------------------------|
//| iteração|       i        | resultado    |                                           
//| 1       |       5        |     5        |                                         
//| 2       |       4        |    20        |                                    
//| 3       |       3        |    60        |                                       
//| 4       |       2        |   120        | 
//| 5       |       1        |   160        |                                     
//|-----------------------------------------|*/
/*
let numeros = [1,2,3,4,5]
let soma = 0

for(let i = 0 ; i< numeros.length; i++){
    console.log(`i ${i}, numeros[i] : ${numeros[i]},soma antes: ${soma}`);
    soma += numeros[i];
    console.log(`soma depois: ${soma}`);
}
console.log(`Resultado final : ${soma}`);
*/
/*
let numeros = [1,2,3,4,5];
let somaPares = 0
for(let i = 0; i<numeros.length; i++){
    console.log(`i ${i},numeros[i]: ${numeros[i]} soma antes: ${somaPares}`);
    
    if(numeros[i]%2 === 0){
        somaPares += numeros[i];
        console.log(`Soma depois ${somaPares}`);
        
    }
}
console.log(`Soma final ${somaPares}`);
*/

function jogoPontuacao(jogadas){
    let pontuacao = 0
    console.log(`essas são minhas jogadas ${jogadas}`); 
    for(let i = 0; i< jogadas.lenght;i++){
        
        if(jogadas[i] === "ganhou"){
            pontuacao += 3 
            console.log(pontuacao)
        }
        else if (jogadas[i] === "empatou"){
            pontuacao += 1;
        }
        else if (jogadas[i] === "perdeu"){
            pontuacao -=1;

        }
        
    }return pontuacao
}
let resultadoFinal = jogoPontuacao(["ganhou","empatou","perdeu","Ganhou"]);
console.log(`Pontuação final: ${resultadoFinal}`);
