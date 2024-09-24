/*let matrizes = [
    [1,2,3],
    [4,5,6]
]
console.log(matrizes[0][1]);
console.log(matrizes[1][2]);
console.log(matrizes[1][0]);
*/
/*
let matriz2 = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]
console.log(matriz2[0][1]); //Valor 20
console.log(matriz2[2][1]); // Valor 80
console.log(matriz2[1][0]); //Valor 40
*/



/*
let matriz3 = []

matriz3[0]= [1,2,3]
matriz3[1] = [4,5,6]
matriz3[2] = [7,8,9]
*/
/*
let jogoDaVelha = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
jogoDaVelha[1][2] = 1
console.log(jogoDaVelha);
*/
/*
let matriz4 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]/*
let soma = 0
for(let i=0 ; i< matriz4.length;i++){
    for(let j = 0; j< matriz4[i].length;j++ ){
        console.log(matriz4[i][j]);
        soma += matriz4[i][j]
    }
}
console.log(soma);  */
/*
for(let i=0 ; i< matriz4.length;i++){
    for(let j = 0; j< matriz4[i].length;j++ ){
        matriz4[i][j]*=2
        console.log(matriz4[i][j]);
        
    }
}
    */
   /*
let matriz = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]

]
function calcular(){
    let soma = 0
    for(let i=0 ; i< matriz.length;i++){
        for(let j = 0; j< matriz[i].length;j++ ){
            soma += matriz[i][j]
            console.log(soma);
            
        }
    }
}
calcular()
*/

let batalhaNaval = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]
function navios(){
    batalhaNaval[1][0]= 1,
    batalhaNaval[2][9]= 1,
    batalhaNaval[3][8]= 1,
    batalhaNaval[4][7]= 1,
    batalhaNaval[5][6]= 1,
    batalhaNaval[6][5]= 1,
    batalhaNaval[7][4]= 1,
    batalhaNaval[8][3]= 1,
    batalhaNaval[9][2]= 1,
    batalhaNaval[0][1]= 1
}
let quantidadeNavios = 0
for(let i=0 ; i< batalhaNaval.length;i++){
    for(let j = 0; j< batalhaNaval[i].length;j++ ){
        quantidadeNavios += batalhaNaval[i][j]
        
        
    }
}
console.log(quantidadeNavios);
function tentativas(){
    navios()  
if(batalhaNaval[i][j] === 1){
    console.log("Navio destruido");
}else if (batalhaNaval [i][j === 0]){
                console.log("Posição errada");
                
            }
        }
tentativas()