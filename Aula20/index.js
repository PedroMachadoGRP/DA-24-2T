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
    [0,0,0,0,0,0,0,0,0,0]
]
for (let i = 0; i < batalhaNaval.length; i++) {
    for (let j = 0; j < batalhaNaval[i].length; j++) {
    batalhaNaval[i][j] = Math.floor(Math.random() * 2);
    }
}
console.table(batalhaNaval);

function destruirNavios(p1,p2){
    for(let i=0 ; i< batalhaNaval.length;i++){
        for(let j = 0; j< batalhaNaval[i].length;j++ ){
                let navios1 = Number(prompt("Digite a primeira posição do navio"))
                let navios2 = Number(prompt("Digite a segunda posição do navio"))
                if(batalhaNaval[i][j] === 1 ){
                    batalhaNaval[navios1][navios2] = 0
                    console.log("Navio destruido"); 
                    console.table(batalhaNaval)
                }else if (batalhaNaval[i][j] === 0 ) {
                    batalhaNaval[navios1][navios2] = 0
                    console.log("Você atingiu a água");
                    console.table(batalhaNaval)
                    
                }
            }
        }
            
    }


let comecar= true
while(comecar){
    let num = prompt("Digite 1 para destruir navios e 2 para sair")
    switch(num){
        case "1":
            destruirNavios()
            break
        case "2":
            comecar = false
            break
    }
}