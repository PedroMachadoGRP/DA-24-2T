let personagem = { //Objeto para representar o personagem usado
    nome : "Leon",vida : 20
}
let zumbies = //Objeto para representar os zumbies normais
    {nome : "Zumbie", vida : 20, dano : 3}

let boss =  //Objeto para representar os zumbies normais
    {nome : "Zumbie Rei",vida : 30, dano : 5}

let armas = [ //Array de objeto para mostrar as armas disponiveis
    {nome : "Pistola",dano : 10,durabilidade : 20},
    {nome : "Escopeta", dano : 50, durabilidade : 10},
    {nome : "Faca", dano : 10, durabilidade : 100}

]
let ervas = [ //Objeto para representar a erva que cura o jogador
    {nome : "Erva",cura : 5,quantidade : 1}
]
let municoes = [ //Objeto para repersentar a munição que repara as armas do jogador
    {nome : "Munição",reparo : 10,quantidade : 20}
]
let inimigos = [ //Matriz para representar o número de inimigo
    ["Zumbie"],
    ["Zumbie"],
    ["Zumbie"],
    ["Boss"],
    ["Boss"],
]

let inventario = [ //Matriz para repersentar o inventario do jogador
    ["Erva"],
    ["Pistola"],
    ["Escopeta"],
    ["Faca"],
    ["Munição"],
    [],
    [],
    [],
    [],
    [],
]
let salvarInventario = []; //Array para a função de salvar o inventario do jogador
let salvarInimigos = []; // Array para a função de salvar os inimigos 


function salvarERecarregarJogo(sOR) { //Função para salvar o recarregar o jogo
    if (sOR === "Salvar") { //Caso o jogador querira salvar
        salvarInventario = inventario.map(item => [...item]) //Função callback para  salvar o inventario do jogador
        salvarInimigos = inimigos.map(item => [...item]) //Função callback para  salvar os inimigos
        console.log("Jogo salvo!")
    } else if (sOR === "Recarregar") { //Caso o jogador  queria recarregar
        inventario = salvarInventario.map(item => [...item]) //Trasforma o valor de inventario na variavel  salvarInventario
        inimigos = salvarInimigos.map(item => [...item])  //Trasforma o valor de inimigos na variavel salvarInimigos
        console.log("Jogo recarregado!")
    } else {
        console.log("Erro")
    }
}

function mostrarInventario(){ //Função para mostrar o inventario do jogador
    console.clear() // Limpa o console
    console.table(inventario) // Imprime em uma tabela o inventrario do jogador
}
function mostraInimigos(){
    console.clear()  // Limpa o console
    console.table(inimigos)  // Imprime em uma tabela os inimigos
}
function statusPersonagem(){ //Função para ver os status do personagem do jogador
    console.clear()
    console.log(`Nome:${personagem.nome}`) //Exibe o nome
    console.log(`Vida:${personagem.vida}`) // Exibe a vida
}
function statusArmas(armasNome){ // Função para  ver os status das armas
    console.clear()
    let arma = armas.find( arma => arma.nome == armasNome) //Olha no array de armas se  existe a arma
    if(arma){
        console.log(`Nome: ${arma.nome}`) //Exibe o nome da arma
        console.log(`Dano : ${arma.dano}`)  //Exibe o dano da arma
        console.log(`Durabilidade: ${arma.durabilidade}`)  //Exibe a durabilidade da arma
    }
}
function matarZumbie(nomeInimigo, armaEscolhida) { //Função para matar   um zumbie
    for (let i = 0; i < inimigos.length; i++) { //Percorre a matriz
        for (let j = 0; j < inimigos[i].length; j++) { //Percorre a matriz
            if (inimigos[i][j] === nomeInimigo) { //Ve se o inimigo existe na matriz de inimigos
                let arma = armas.find(arma => arma.nome === armaEscolhida); //Olha se a arma do escolida   existe no array de arma
                if (arma) {
                    zumbies.vida -= arma.dano; //Diminui a vida do zumbie de acordo com o dano da arma
                    arma.durabilidade -= 1 //Diminui a durabilidade da arma
                    personagem.vida -= zumbies.dano //Diminui a vida do jogador de acordo com o dano do inimigo
                    if (zumbies.vida <= 0) { //Caso o jogador mate o zumbi
                        inimigos.splice(i, 1); //Remove o zumbi da matriz de inimigos
                        console.log("Zumbie morto");
                    } else { //Caso o jogador não tenha matado o zumbie
                        console.log(`O zumbie ainda tem ${zumbies.vida} de vida.`);
                    }
                } else { //Caso o jogador tente usar uma arma que não existe no inventario
                    console.log("Arma não encontrada no inventário.");
                }
                return;
            }
        }
    }
    console.log("Zumbie não encontrado.");
}
function matarBoss(nomeInimigo, armaEscolhida){ //Função para matar  o boss
    for (let i = 0; i < inimigos.length; i++) { //Percorre a matriz
        for (let j = 0; j < inimigos[i].length; j++) { //Percorre a matriz
            if (inimigos[i][j] === nomeInimigo) { //Ve se o inimigo existe na matriz de inimigos
                let arma = armas.find(arma => arma.nome === armaEscolhida);  //Olha se a arma do escolida   existe no array de arma
                if (arma) {
                    boss.vida -= arma.dano; //Diminui a vida do Boss de acordo com o dano da arma
                    arma.durabilidade -= 1 //Diminui a durabilidade da arma
                    personagem.vida -= boss.dano //Diminui a vida do jogador de acordo com o dano do inimigo
                    if (boss.vida <= 0) { //Caso o jogador mate o boss
                        inimigos.splice(i, 1); //Remove o boss da matriz de inimigos
                        console.log("Boss morto");
                    } else {
                        console.log(`O Boss ainda tem ${boss.vida} de vida.`); //Caso o jogador não tenha matado o boss
                    }
                } else { //Caso o jogador tente usar uma arma que não existe no inventario
                    console.log("Arma não encontrada no inventário.");
                }
                return;
            }
        }
    }
    console.log("Boss não encontrado.");
}
function usarErva(ervaSelecionada){ //Função para usar a erva que cura o jogador
    for(let i = 0; i < inventario.length; i++){ //Percorre a matriz
        for(let j = inventario[i].length - 1 ; j>= 0; j--){ //Percorre a matriz
            if(inventario[i][j] === ervaSelecionada){ //Caso seja encontrado uma erva no inventario
                let erva = ervas.find( erva => erva.nome === ervaSelecionada);
                personagem.vida += erva.cura //Cura o jogador de acordo com a cura da erva
                inventario[i].splice(j,1) //Remove a erva do inventario depois de usada
                alert("A Erva foi usada");
                mostrarInventario()
                break
                
                }else if(personagem.vida >= 20){ //Caso o jogador  tenha mais de 20 de vida
                    alert("Você não pode  usar mais usar erva,porque já está com maximo de vida que é 20");
                }
                else{ //Caso você não tenha ervas no seu inventrario
                    alert("Você não tem Erva no inventario para usar");
                    break
                }
            }
        }        
}
function usarMunicao(municaoSelecionada,armaSelecionada){ //Função para usar a munição para aumentar a durabilidade das armas
    for(let i = 0; i < inventario.length; i++){ //Percorre a matriz
        for(let j = inventario[i].length - 1 ; j>= 0; j--){ //Percorre a matriz
            if(inventario[i][j] === municaoSelecionada){ //Caso seja encontrado uma munição no inventario
                let arma = armas.find (arma => arma.nome === armaSelecionada) //Identifica a arma selecionado pelo jogador
                arma.durabilidade += municao.reparo // Aumenta a durabilidade das armas de acordo com a quantiade de reparo da munição
                inventario[i].splice(j,1) //Exclui a munição usado do  da matriz de inventario
                alert("A munição foi usada");
                mostrarInventario()
                break
                }
                else{ //Caso o jogador não tenha munição no inventario
                    alert("Você não tem munição no inventario para usar");
                    break  
                }
            }
        } 
}
function adicionarErva(){ //Função para adicionar um erva ao inventario do jogador
    let nomeErva = "Erva";
    let adicionouErva = false;

    for (let i = 0; i < inventario.length; i++) { //Percorre a matriz de inventario
        if (inventario[i].length === 0) {
            inventario[i].push(nomeErva) //Adiciona uma erva a matriz de inventario
            adicionouErva = true
            alert("Uma erva foi adicionada ao seu inventário");
            mostrarInventario(); 
            break; 
        }
    }
    if (!adicionouErva) { //Caso o inventario do jogador esteja cheio
        alert("Seu invetario está cheio");
    }
}
function adicionarMunicao(){ //Função para adicionar um erva ao inventario do jogador
    let nomeMunicao = "Munição";
    let adicionouMunicao = false;

    for (let i = 0; i < inventario.length; i++) { //Percorre a matriz de inventario
        if (inventario[i].length === 0) {
            inventario[i].push(nomeMunicao) //Adiciona uma erva a matriz de inventario
            adicionouMunicao = true
            alert("Uma Munição foi adicionada ao seu inventário");
            mostrarInventario(); 
            break; 
        }
    }
    if (!adicionouMunicao) {
        alert("Seu invetario está cheio");
    }
}
function adicionarArma(armaNome4){ //Função para adicionar um erva ao inventario do jogador
    let identificarArma = armas.find (arma => arma.nome === armaNome4) //Arma selecionado pelo jogador
    if(identificarArma){
        let adicionouArma = false;

        for (let i = 0; i < inventario.length; i++) { //Percorre a matriz de inventario 
            if (inventario[i].length === 0) {
                inventario[i].push(armaNome4) //Envia a arma selecionada para a matriz de inventario
                adicionouArma = true
                alert(`A arma ${identificarArma.nome} foi adicionada ao seu inventario`);
                mostrarInventario(); 
                break; 
            }
        }
        if (!adicionouArma) { //Caso o inventario do jogador estejá cheio
            alert("Seu invetario está cheio");
        }
    }
}

function descartarErva(ervaSelecionada2){ //Função para descartar ervas
for(let i = 0; i < inventario.length; i++){ //Percorre a matriz de inventario
    for(let j = inventario[i].length - 1 ; j>= 0; j--){ //Percorre a matriz de inventario
        if(inventario[i][j] === ervaSelecionada2){ //Caso encotre alguma erva no inventario
            inventario[i].splice(j,1) //Remove a erva do inventario
            alert("A erva foi descartada");
            mostrarInventario()
            }
        else{ //Caso o jogador não tenha erva no inventario
            alert("Você não tem erva no inventrario para descartar")
        }
        }
    }
}
function descartarMunicao(municaoSelecionada2){ //Função para descartar munições
    for(let i = 0; i < inventario.length; i++){ //Percorre a matriz de inventario
        for(let j = inventario[i].length - 1 ; j>= 0; j--){ //Percorre a matriz de inventario
            if(inventario[i][j] === municaoSelecionada2){//Caso encotre alguma munição no inventario
                inventario[i].splice(j,1) //Remove a munição da matriz de inventario
                alert("A munição foi descartada");
                mostrarInventario()
                }
                else{//Caso  o jogador não tenha munição no inventario
                    console.log("Você não tem munição no inventario para descartar");
                    
                }
            }
        }
}
function descartarArma(armaSelecionada2){ //Função para descartar armas
    let arma  = armas.find (arma => arma.nome === armaSelecionada2) // Arma escolida pelo jogador
    if (arma){
        for(let i = 0; i < inventario.length; i++){ //Percorre a matriz de inventario
            for(let j = inventario[i].length - 1 ; j>= 0; j--){ //Percorre a matriz de inventario
                if(inventario[i][j] === armaSelecionada2){ //Caso a arma esteja no inventario
                    inventario[i].splice(j,1) //Remove a arma do inventario
                    alert(`A arma ${arma.nome} foi descartada`);
                    mostrarInventario()
                    }
                }
            }
    }
}



let iniciar = true
while(iniciar){
    let pergunta = prompt("Escolha qual opção você quer para seu jogo, \n1-  Exibir inventario \n2- Mostrar os Inimigos \n3- Status do personagem \n4- Status da arma \n5- Matar Zumbie \n6- Matar boss \n7- Usar item \n8- Descartar item \n9- Salvar o jogo ou recarregar  \n10- Adicionar algo ao inventario\n11 - Sair ")
    switch(pergunta){
        case "1":
            mostrarInventario()
            break
        case "2":
            mostraInimigos()
            break
        case "3":
        statusPersonagem()
            break
        case "4":
            let armaNome3 = prompt("Digite o nome da arma para ver seu status")
            statusArmas(armaNome3)
            break
        case "5":
            mostrarInventario()
            let arma = prompt("Digite a arma que deseja usar")
            matarZumbie("Zumbie",arma)
            break
        case "6":
            mostrarInventario()
            let arma2 = prompt("Digite a arma que deseja usar")
            matarBoss("Boss",arma2)
            break
        case "7":
            let qualItem = prompt("Digite o qual item você quer usar Erva ou Munição")
            if(qualItem === "Erva"){
                usarErva("Erva")
            }else if(qualItem === "Munição"){
                let armaEscolida = prompt("Qual arma você deseja usar essa munição")
                usarMunicao(qualItem,armaEscolida)
            }
            break
        case "8":
            let qualItem2 = prompt("Digite o que você quer descartar do seu invetario  Erva, Munição ou  Arma")

            mostrarInventario()
            if(qualItem2 === "Erva"){
                descartarErva("Erva")
            }else if(qualItem2 === "Munição"){
                descartarMunicao("Munição")
            }else if(qualItem2 === "Arma"){
                let qualArma = prompt("Digite qual arma você quer descartar")
                descartarArma(qualArma)
            }
            break
        case "9":
            let salvarRecarregar = prompt("Digite Salvar para salvar o jogo ou Recarregar para recarregar o jogo")
            salvarERecarregarJogo(salvarRecarregar)
            break
        case "10":
            let qualItem3 = prompt("Digite o que você quer adicionar ao inventario  Erva, Munição ou Arma")

            if(qualItem3 === "Erva"){
                adicionarErva("Erva")
            }else if(qualItem3 === "Munição"){
                adicionarMunicao("Munição")
            }else if(qualItem3 === "Arma"){
                let qualArma2 = prompt("Digite qual arma você quer adicionar entre \n- Pistola \n- Escopeta \n- Faca")
                if(qualArma2 !== "Pistola" || qualArma2 !== "Escopeta"  || qualArma2 !== "Faca"){
                    adicionarArma(qualArma2)
                }
            }
            break
        case "11":
            iniciar =false
            break

    }
}
