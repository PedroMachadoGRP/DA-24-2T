let personagens = [
    {nome : "Link", vida : 20, ataque: 25, defesa: 5 },
    {nome : "Zelda", vida : 5, ataque: 5, defesa: 25 },
    {nome : "Ganondorf", vida : 21, ataque: 100, defesa: 51 }
]

let armas = [
    {nome : "Links swords", dano : 5, alcance : 5},
    {nome : "Graveto de arvore", dano : 1, alcance: 2},
    {nome : "Master sword", dano : 22, alcance : 201}
]

let itens = [
    {nome: "Rupie", tipo: "Dinheiro",quantidade : 21},
    {nome: "Hookshot", tipo: "Exploração",quantidade : 20},
    {nome: "Ocarina of time", tipo: "Música",quantidade : 21}
]

function validarPersonagem(nome,vida,ataque,defesa){
    for(personagem of personagens){
        if(personagem.vida > 20){
            console.log(`O personagem ${personagem.nome} ultrapassou o limite de vida`);
            
        }
        if(personagem.ataque > 20 ){
            console.log(`O ataque do personagem ${personagem.nome} ultrapassou o limite permitido`);
            
        }
        if(personagem.defesa > 50){
            console.log(`A defesa do personagem ${personagem.nome} ultrapassou o limite permitido`);
        }
    }
}

function validarItem(nome,tipo,quantidade){
    for(item of itens){
        if(item.quantidade < 21){
            console.log(`O item ${item.nome} é invalido pois ultrapassou a quantidade permitida `);
            
        }else{
            console.log(`O item ${item.nome} é valido`);
            
        }
    }
}
function validarArma(nome,dano,alcance){
    for(arma of armas){
        if(arma.dano > 21){
            console.log(`A arma ${arma.nome} é invalida pois ultrapassou o limite de dano`);   
        }
        if(arma.alcance > 21){
            console.log(`A arma ${arma.nome} é invalida pois ultrapassou o limite de alcance`)
        }
    }
}

let iniciar = true
while(iniciar){
    let iniciar2 = prompt("Digite o número da função que você deseja iniciar \n1 Validar personagem \n2 Validar arma \n3 Validar item \n4 Sair" )
    switch(iniciar2){
        case "1":
            validarPersonagem()
            break
        case "2":
            validarArma()
            break
        case "3":
            validarItem()
            break
        case "4":
            iniciar = false
        default:
            console.log("Número invalido");
            
    }
}