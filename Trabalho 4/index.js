let personagem = { //Objeto para representar o personagem usado
    nome : "Leon",vida : 20
}
let zumbies = //Objeto para representar os zumbies normais
    {nome : "Zumbie", vida : 20, dano : 3}

let boss =  //Objeto para representar os zumbies normais
    {nome : "Boss",vida : 100, dano : 5}

let armas = [ //Array de objeto para mostrar as armas disponiveis
    {nome : "Pistola",dano : 10,durabilidade : 20},
    {nome : "Escopeta", dano : 15, durabilidade : 10},
    {nome : "Faca", dano : 10, durabilidade : 100}

]
let ervas = [ //Objeto para representar a erva que cura o jogador
    {nome : "Erva",cura : 5}
]
let chave = [
    {nome:"Chave",uso:1}
]
let municoes = [ //Objeto para repersentar a munição que repara as armas do jogador
    {nome : "Munição",reparo : 10}
]
let inimigos = [ //Matriz para representar o número de inimigo
    ["Zumbie"],
    ["Zumbie"],
    ["Zumbie"],
    ["Zumbie"],
    ["Zumbie"],
    ["Zumbie"],
    ["Zumbie"],
    ["Zumbie"],
    ["Zumbie"],
    ["Zumbie"],
    ["Boss"],
    ["Boss"],
    ["Boss"],
    ["Boss"],
    ["Boss"],


]

let inventario = [ //Matriz para repersentar o inventario do jogador
    ["Erva"],
    ["Pistola"],
    ["Escopeta"],
    ["Faca"],
    ["Munição"],
    ["Chave"],
    [],
    [],
    [],
    [],
]

let salvarInventario = []; //Array para a função de salvar o inventario do jogador
let salvarInimigos = []; // Array para a função de salvar os inimigos 
let salvarPersonagem = {} // Objeto para a função de salvar personagem


function salvarERecarregarJogo(sOR) { //Função para salvar o recarregar o jogo
    if (sOR === "Salvar") { //Caso o jogador querira salvar
        salvarInventario = inventario.map(item => [...item]) //Função callback para  salvar o inventario do jogador
        salvarInimigos = inimigos.map(item => [...item]) //Função callback para  salvar os inimigos
        salvarPersonagem = {...personagem} //Spreed para salvar o personagem
        console.log("Jogo salvo!")
    } else if (sOR === "Recarregar") { //Caso o jogador  queria recarregar
        inventario = salvarInventario.map(item => [...item]) //Trasforma o valor de inventario na variavel  salvarInventario
        inimigos = salvarInimigos.map(item => [...item])  //Trasforma o valor de inimigos na variavel salvarInimigos
        personagem = {...salvarPersonagem} //Transforma o valor de personagem na variavel salvar personagem
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
                    }else if(arma.durabilidade <= 0){
                        alert("Você não pode usar mais essa arma")
                    }
                     else { //Caso o jogador não tenha matado o zumbie
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
function usarErva(ervaSelecionada) { // Função para usar a erva para curar o personagem
    let erva = ervas.find(erva => erva.nome === ervaSelecionada); // Encontra a erva no array de ervas
    // Verifica se a erva existe
    if (!erva) {
        alert("Erva não encontrada no inventário.");
        return;
    }
    let ervaInventario = false;
    for (let i = 0; i < inventario.length; i++) { // Percorre a matriz de inventario
        for (let j = inventario[i].length - 1; j >= 0; j--) { // Percorre a matriz de inventario
            if (inventario[i][j] === ervaSelecionada) { // Caso tiver erva no inventario
                ervaInventario = true;
                if (personagem.vida < 20) { //Caso a vida do personagem seja menor que 20
                    personagem.vida += erva.cura; // Cura a vida do personagem
                    if (personagem.vida > 20) {
                        personagem.vida = 20; // Garante que a vida não ultrapasse 20
                    }
                    inventario[i].splice(j, 1); // Exclui a erva depois do uso
                    alert("A erva foi usada");
                    mostrarInventario();
                } else {
                    alert("Sua vida já está no máximo que é 20.");
                }
            }
        }
    }

    if (!ervaInventario) { // Caso você não tenha erva no seu inventario
        alert("Você não tem erva no inventário para usar.");
    }
}
function usarMunicao(municaoSelecionada,armaSelecionada){ //Função para usar a munição para aumetar a durabilidade da arma
    let municao = municoes.find(municao => municao.nome === municaoSelecionada); //Encontra a munição no array de munição
    let arma = armas.find(arma => arma.nome === armaSelecionada);//Encontra a arma no array de armas
    if (!municao) { //Caso a munição não seja achada
        alert("Munição não encontrada no inventário.");
    }
    let muniçãoNoInventario = false;
    for (let i = 0; i < inventario.length; i++) {  //Percorre a matriz de inventario
        for (let j = inventario[i].length - 1; j >= 0; j--) {  //Percorre a matriz de inventario
            if (inventario[i][j] === municaoSelecionada) { 
                muniçãoNoInventario = true; 
                arma.durabilidade += municao.reparo; //Aumenta a durabilidade da arma selecionada
                inventario[i].splice(j, 1); //Exclui a munição após o uso
                alert("A munição foi usada");
                mostrarInventario();
            }
        }
    }
    if (!muniçãoNoInventario) { //Caso você não tenha munição no inventario
        alert("Você não tem munição no inventário para usar.");
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
function adicionarChave(){ //Função para adicionar uma chave ao inventario do jogador
    let nomeChave = "Chave";
    let adicionouChave = false;

    for (let i = 0; i < inventario.length; i++) { //Percorre a matriz de inventario
        if (inventario[i].length === 0) {
            inventario[i].push(nomeChave) //Adiciona uma chave a matriz de inventario
            adicionouChave = true
            alert("Uma chave foi adicionada ao seu inventário");
            mostrarInventario(); 
            break; 
        }
    }
    if (!adicionouChave) { //Caso o inventario do jogador esteja cheio
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
function descartarChave(chaveSelecionada2){ //Função para descartar chave
    for(let i = 0; i < inventario.length; i++){ //Percorre a matriz de inventario
        for(let j = inventario[i].length - 1 ; j>= 0; j--){ //Percorre a matriz de inventario
            if(inventario[i][j] === chaveSelecionada2){ //Caso encotre alguma chave no inventario
                inventario[i].splice(j,1) //Remove a chave do inventario
                alert("A chave foi descartada");
                mostrarInventario()
                }
            else{ //Caso o jogador não tenha chave no inventario
                alert("Você não tem chave no inventrario para descartar")
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
    if(personagem.vida <= 0){
        alert("Você morreu");
        iniciar = false
        break
    }
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
            if(inimigos.length === 0){
                alert("Você matou todos os zumbies,Parabens")
                iniciar = false
                break
            }else{
                let arma = prompt("Digite a arma que deseja usar")
                matarZumbie("Zumbie",arma)
                break
            }

        case "6":
            mostrarInventario()
            if(inimigos.length === 0){
                alert("Você matou todos os zumbies,Parabens")
                iniciar = false
                break
            }else{
                let arma2 = prompt("Digite a arma que deseja usar")
                matarBoss("Boss",arma2)
                break
            }
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
            }else if(qualItem2 === "Chave"){
                descartarChave("Chave")
            }
            else if(qualItem2 === "Munição"){
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
            let qualItem3 = prompt("Digite o que você quer adicionar ao inventario  Erva, Munição,Chave ou Arma")

            if(qualItem3 === "Erva"){
                adicionarErva("Erva")
            }else if(qualItem3 === "Munição"){
                adicionarMunicao("Munição")
            }else if(qualItem3 === "Chave"){
                adicionarChave("Chave")
            }
            else if(qualItem3 === "Arma"){
                let qualArma2 = prompt("Digite qual arma você quer adicionar entre \n- Pistola \n- Escopeta \n- Faca")
                if(qualArma2 !== "Pistola" || qualArma2 !== "Escopeta"  || qualArma2 !== "Faca"){
                    adicionarArma(qualArma2)
                }
            }
        case "11":
            iniciar =false
            break
        default :
        alert("Opção invalida")
    }
}
