let personagem = {
    nome : "Leon",
    vida : 10
}


let arma = [
    {nome : "Pistola",durabilidade : 20,},

]
let municao = [
    {nome : "Munição de pistola", quantidade : 20},
]
let itens = [
    {nome : "Erva verde",tipo : "Cura",quantidade : 2}
]


let mapaJogo = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
]

let posicaoPersonagem = {pi : 12, pii : 12}
mapaJogo[posicaoPersonagem.pi][posicaoPersonagem.pii] = 1


function exibirMapa(){
console.clear();
console.table(mapaJogo);

}
function movimentarMapa(movimento){
    
    mapaJogo[posicaoPersonagem.pi][posicaoPersonagem.pii] = 0;
    if (movimento === 'cima' && posicaoPersonagem.pi > 1) {
        posicaoPersonagem.pi--;
        mapaJogo[posicaoPersonagem.pi][posicaoPersonagem.pii] = 1;
    }else if(movimento === 'cima' && posicaoPersonagem.pi === 1){
        alert("Erro,você está tentando ultrapassar o limite do mapa");
        mapaJogo[posicaoPersonagem.pi][posicaoPersonagem.pii] = 1;
    }
     else if (movimento === 'baixo' && posicaoPersonagem.pi < 13) { 
        posicaoPersonagem.pi++;
        mapaJogo[posicaoPersonagem.pi][posicaoPersonagem.pii] = 1;
    }else if(movimento === 'baixo' && posicaoPersonagem.pi === 13){
        alert("Erro,você está tentando ultrapassar o limite do mapa");
        mapaJogo[posicaoPersonagem.pi][posicaoPersonagem.pii] = 1;
    }
     else if (movimento === 'esquerda' && posicaoPersonagem.pii > 1) {
        posicaoPersonagem.pii--;
        mapaJogo[posicaoPersonagem.pi][posicaoPersonagem.pii] = 1;
    }else if(movimento === 'esquerda' && posicaoPersonagem.pii === 1){
        alert("Erro,você está tentando ultrapassar o limite do mapa");
        mapaJogo[posicaoPersonagem.pi][posicaoPersonagem.pii] = 1
    }
    else if (movimento === 'direita' && posicaoPersonagem.pii < 13) {
        posicaoPersonagem.pii++;
        mapaJogo[posicaoPersonagem.pi][posicaoPersonagem.pii] = 1;
    }else if(movimento === 'direita' && posicaoPersonagem.pii === 13){
        alert("Erro,você está tentando ultrapassar o limite do mapa");
        mapaJogo[posicaoPersonagem.pi][posicaoPersonagem.pii] = 1
    }
    
    exibirMapa()
}
let iniciar = true
while(iniciar){
    let pergunta = prompt("Digite 1 para exibir o mapa e 2 para movimentar o personagem e 3 para sair")
    switch(pergunta){
        case "1":
            exibirMapa()
            break
        case "2":
            let movimento = prompt("Digite cima, baixo, esquerda ou direita")
            movimentarMapa(movimento)
            break
        case "3":
            iniciar = false
    }
}