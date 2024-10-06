let personagens = [ //Array de objeto Personagens
    {nome : "Link", vida : 20, ataque: 25, defesa: 5 },
    {nome : "Zelda", vida : 5, ataque: 5, defesa: 25 },
    {nome : "Ganondorf", vida : 21, ataque: 100, defesa: 51 }
]

let armas = [ // Array de objetos Armas
    {nome : "Links swords", dano : 5, alcance : 5},
    {nome : "Graveto de arvore", dano : 1, alcance: 2},
    {nome : "Master sword", dano : 22, alcance : 201}
]

let itens = [ // Array de objetos Itens
    {nome: "Rupie", tipo: "Dinheiro",quantidade : 21},
    {nome: "Hookshot", tipo: "Exploração",quantidade : 20},
    {nome: "Ocarina of time", tipo: "Música",quantidade : 21}
]

function selecionarPersonagem(){ //Função para selecionar um personagem
    console.table(personagens);//Chamando o array de personagens em uma tabela
    
    let personaNome = prompt("Digite o nome do personagem a ser selecionado ")
    let personagem = personagens.find(personagem => personagem.nome === personaNome) // Procura no array de personagens se a variavel anterior se encaixa nos crtérios
    while(personagem === undefined){ // Looping para fazer o usuario não digitar um personagem que não existe no array de personagens
        if(personagem === undefined){
            console.log("Erro,personagem não encontrado");
            let personaNome = prompt("Digite o nome do personagem a ser selecionado ")
            personagem = personagens.find(personagem => personagem.nome === personaNome) //Re-inserindo a variavel com um novo valor

        }
    }
    if(personagem){ // condicional para selecionar o nome desejado
        let personaNome2 = prompt("Digite o nome do personagem selecionado novamente")
        if(personaNome !== personaNome2){ // condicional para identificar se as duas variaveis está iguais
            while(personaNome ==! personaNome2){
                console.log(`Erro, nome de personagem digitado não é igual ao personagem selecionado`);
                personaNome2 = prompt("Digite o nome do personagem selecionado novamente") //Re-inserindo a variavel com um novo valor

            }
        }else {
            console.log("Personagem selecionado corretamente");
        }
        
    }if(personagem.ataque <= 0 || personagem.ataque >= 20){ // condicional de comparação para não deixar o usuario digitar um número menor que 0 ou maior que 20 
        while(personagem.ataque <= 0 || personagem.ataque >= 20){ //looping para fazer o usuario  não digitar um valor que seja maior que 0 e menor que 20

            console.log("Erro,o valor de ataque deste personagem deve ser maior que 0 e menor que 20");
            personagem.ataque = Number(prompt("Digite o novo valor do ataque")) //Re-inserindo a variavel com um novo valor
        }
    }else {
        console.log("O valor do ataque está balanceado");
        
    }if(personagem.vida <= 0 || personagem.vida >= 20){ // condicional de comparação para não deixar o usuario digitar um número menor que 0 ou maior que 20 
        while(personagem.vida <= 0 || personagem.vida >= 20){ //looping para fazer o usuario  não digitar um valor que seja maior que 0 e menor que 20

            console.log("Erro,o valor da vida do personagem deve ser maior que 0 e menor que 20");
            personagem.vida = Number(prompt("Digite o novo valor da vida"))//Re-inserindo a variavel com um novo valor
        }
    }else{
        console.log("A vida do personagem está balanceada");
        
    }if(personagem.defesa <= 0 || personagem.defesa >= 10){ // condicional de comparação para não deixar o usuario digitar um número menor que 0 ou maior que 20 
        while(personagem.defesa <= 0 || personagem.defesa >= 10){ //looping para fazer o usuario  não digitar um valor que seja maior que 0 e menor que 10
            console.log("Erro, o valor da defesa deve ser maior que 0  e menor que 10")
            personagem.defesa = Number(prompt("Digite o novo valor da defesa")) //Re-inserindo a variavel com um novo valor
            
        }
    }else{
        console.log("O valor da defesa está balanceado");
        
    }
    
}

function selecionarArma(){ //Função para selecionar uma arma
    console.table(armas); //Chamando o array de armas em uma tabela
    
    let arumaNome = prompt("Digite o nome da arma a ser selecionada")
    let arma = armas.find(arma => arma.nome === arumaNome) // Procura no array de armas se a variavel anterior se encaixa nos crtérios
    while(arma === undefined){ // Looping para fazer o usuario não digitar um personagem que não existe no array de personagens
        if(arma === undefined){
            console.log("Erro,arma não encontrada")
            arumaNome = prompt("Digite o nome da arma a ser selecionada novamente")
            arma = armas.find(arma => arma.nome === arumaNome) //Re-inserindo a variavel com um novo valor
        }
    }
    if(arma){
        let arumaNome2 = prompt("Digite o nome da arma novamente")
        if(arumaNome2 !== arumaNome){
            while(arumaNome ==! arumaNome2){
                console.log("Erro, o nome da arma não é igual ao nome da arma selecionda")
                arumaNome2 = prompt("Digite o nome do personagem selecionado novamente") //Re-inserindo a variavel com um novo valor
        }

     }else {
        console.log("Nome da arma está correta");
        
     }if(arma.dano <= 0 ||  arma.dano >= 20){ // condicional de comparação para não deixar o usuario digitar um número menor que 0 ou maior que 20 
        while(arma.dano <= 0 || arma.dano >= 20){ //looping para fazer o usuario  não digitar um valor que seja maior que 0 e menor que 20
            console.log("Erro,o dano da arma deve ser maior que 0 e menor que 20")
            arma.dano = Number(prompt("Digite o novo valor do dano da arma")) //Re-inserindo a variavel com um novo valor
        }
     }else{
        console.log("Dano da arma está balanceada");
     }if(arma.alcance <= 0 ||  arma.alcance >= 10 ){ // condicional de comparação para não deixar o usuario digitar um número menor que 0 ou maior que 20 
        while(arma.alcance <= 0 || arma.alcance >= 10 ){ //looping para fazer o usuario  não digitar um valor que seja maior que 0 e menor que 10
            console.log("Erro,o alcance da arma deve ser maior que 0 e menor que 10");
            arma.alcance = Number(prompt("Digite o novo valor do alcance da arma")) //Re-inserindo a variavel com um novo valor
             
        }
     }else{
        console.log("Alcance da arma está balanceado");
        
     }
    }
}
function  selecionarItem(){ //Função para selecionar um item
    console.table(itens); // //Chamando o array de itens em uma tabela
     
    let itenNome = prompt("Digite o nome do item a ser selecionado")
    let item = itens.find(item => item.nome === itenNome) // Procura no array de itens se a variavel anterior se encaixa nos crtérios
    while(item === undefined){ // Looping para fazer o usuario não digitar um personagem que não existe no array de personagens
        if(item === undefined){
            console.log("Erro, item não encontrado")
            itenNome = prompt("Digite o nome do item a ser selecionado novamente")
            item = itens.find(item => item.nome === itenNome) //Re-inserindo a variavel com um novo valor
        }
    }
    let  itenNome2 = prompt("Digite o nome do item novamente")
    if(itenNome2 !== itenNome){
        while(itenNome2 !== itenNome){
            console.log("Erro, o nome do item não é igual ao nome do item selecionado")
            itenNome2 = prompt("Digite o nome do item selecionado novamente") //Re-inserindo a variavel com um novo valor
        }

    }
    let itenTipo = prompt("Digite o tipo do item")
    if(itenTipo !== item.tipo){ // Condicional para verificar se o tipo do item inserido é igual ao do item selecionado
        while(itenTipo !== item.tipo){
            console.log("Erro, o tipo do item não é igual ao tipo do item selecionado")
            itenTipo = prompt("Digite o tipo do item selecionado novamente") //Re-inserindo a variavel com um novo valor
        }
    }else{
        console.log("Tipo do item está correto");
    }if(item.quantidade <= 0 || item.quantidade >= 50){
        while(item.quantidade <= 0 || item.quantidade >= 50){
            console.log("Erro,o quantidade do item deve ser maior que 0 e menor que 50")
            item.quantidade = Number(prompt("Digite o novo valor da quantidade do item")) //Re-inserindo a variavel com um novo valor
        }
    }else{
        console.log(`A quantidade do item ${itenNome} está correta`);
        
    }
}

function exibirPersonagens(){  
    console.table(personagens);
    
}
function exibirArmas(){
console.table(armas);
}
function exibirItens(){
    console.table(itens);
}
function adicionarPersonagem(nome,vida,ataque,defesa){
    const novoPersonagem = {
        nome : nome,
        vida : vida,
        ataque: ataque,
        defesa: defesa
    }
    personagens.push(novoPersonagem)
    console.table(personagens);
    
}
function adicionarArmas(nome,dano,alcance){
    const novaArma = {
        nome : nome,
        dano : dano,
        alcance : alcance
    }
    armas.push(novaArma)
    console.table(armas);
    
}
function adicionarItens(nome,tipo,quantidade){
    const novoItem = {
        nome : nome,
        tipo : tipo,
        quantidade : quantidade
    }
    itens.push(novoItem)
    console.table(itens);
    
}
function validarItem(){
    let itemNome = prompt("Digite o nome do item")
    let itemEncontrado = itens.find(item => item.nome === itemNome)
    if(itemEncontrado){
        while(itemEncontrado){
            console.log("Erro,item já registrado");
            itemNome = prompt("Digite o nome do item novamente")
            itemEncontrado = itens.find(item => item.nome === itemNome)

        }
    }else if(itemNome === ""){
        while(itemNome === ""){
            console.log("Erro, o nome do item não pode estar vazio");
            itemNome = prompt("Digite o nome do item novamente")
            
        }
    }else{
        console.log(`O item ${itemNome} foi adicionado com sucesso`);
        
    }
    let itemTipo = prompt("Digite o tipo do item")
    if(itemTipo === ""){
        while(itemTipo === ""){
            console.log("Erro,o tipo do item não pode estar vazio");
            itemTipo = prompt("Digite o tipo do item novamente")
            
        }
    }else {
        console.log(`O tipo do item ${itemNome} é ${itemTipo} `);
        
    }
    let  itemQuantidade = Number(prompt("Digite a quantidade do item"))
    if(itemQuantidade <= 0 || itemQuantidade >= 50){
        while(itemQuantidade <= 0 || itemQuantidade >= 50){
            console.log("Erro,quantidade invalida, a quantidade deve ser maior que 0 e menor que 50");
           itemQuantidade = Number(prompt("Digite a quantidade de itens novamente"))
        }
    }else {
        console.log(`A quantidade do item ${itemNome} é ${itemQuantidade}`);
    }
    adicionarItens(itemNome,itemTipo,itemQuantidade)

}

function validarArma(){
    let armaNome = prompt("Digite o nome da sua arma")
    let armaEncontradao = armas.find(arma => arma.nome === armaNome)
    if(armaEncontradao){
        while(armaEncontradao){
            console.log("Erro,Arma já registrada");
            armaNome = prompt("Digite o nome da sua arma novamente")
            armaEncontradao = armas.find(arma => arma.nome === armaNome)
            
        }
    }else if(armaNome === ""){
        while (armaNome === "") {
            console.log("Erro, o nome da arma não pode ser vazia");
            armaNome = prompt("Digite o nome da sua arma novamente")
        }
        
    }else {
        console.log(`${armaNome} adicionada com sucesso`);
        
    }
    let aramaDano = Number(prompt("Digite o dano da arma"))
    if(aramaDano <= 0 ||  aramaDano >= 20){
        while(aramaDano <= 0 ||  aramaDano >= 20){
            console.log("Erro, o dano da arma deve ser maior que 0 e menor que 20");
            aramaDano = Number(prompt("Digite o dano da arma novamente"))  
        }
    }
    else if(aramaDano === ""){
        while(aramaDano === ""){
            console.log("Erro,o dano da arama não pode ser vazio");
            aramaDano = Number(prompt("Digite o dano da arma novamente"))
            
        }
    }
    else{
        console.log(`O dano da arma ${armaNome} é ${aramaDano}`);
        
    }
    let aramaAlcanace = Number(prompt("Digite o alcance da arma"))
    if(aramaAlcanace <= 0 ||  aramaAlcanace >= 10) {
        while(aramaAlcanace <= 0 ||  aramaAlcanace >= 10){
            console.log("Erro, o alcance da arma deve ser maior que 0 e menor que 10")
            aramaAlcanace = Number(prompt("Digite o alcance da arma novamente"))
        }
    }
        else if(aramaAlcanace === ""){
            while(aramaAlcanace === ""){
                console.log("Erro,o alcance da arama não pode ser vazio");
                aramaAlcanace = Number(prompt("Digite o dano da arma novamente"))
                
            }
        }
    else {
        console.log(`O alcance da arma ${armaNome} é ${aramaAlcanace}`);
        
    }
    adicionarArmas(armaNome,aramaDano,aramaAlcanace)
}
function validarPersonagem(){
    let personagemNome = prompt("Digite o nome do personagem")
    let personagemEncontradao = personagens.find(personagen => personagen.nome === personagemNome)
    if(personagemEncontradao){
        while(personagemEncontradao){
            console.log("Erro,personagem já registrado");
            personagemNome = prompt("Digite o nome do personagem novamente")
            personagemEncontradao = personagens.find(personagen => personagen.nome === personagemNome)
        }
    }
    else if(personagemNome === ""){
        while(personagemNome === ""){
            console.log("Erro, nome não pode ser vazio");
            personagemNome = prompt("Digite o nome do personagem novamente")
        }
    }
    else {
        console.log(`${personagemNome} adicionado com sucesso`);
        
    }

    let vidaPesonagem = Number(prompt("Digite a quantidade de vida do personagem"))
    if(vidaPesonagem <= 0 || vidaPesonagem >= 20){
        while(vidaPesonagem <= 0 || vidaPesonagem >= 20){
            console.log("Erro,vida invalida, sua vida deve ser maior que 0 e menor que 20");
            vidaPesonagem = Number(prompt("Digite a quantidade de vida do personagem novamente"))
        }
    }
    else{
        console.log(`O personagem ${personagemNome} tem a vida igual a ${vidaPesonagem}`);
        
    }
    let defesaPesonagem = Number(prompt("Digite a quantidade de defesa do personagem"))
    if(defesaPesonagem <= 0 || defesaPesonagem >= 10){
        while(defesaPesonagem <= 0 || defesaPesonagem >= 10){
            console.log("Erro,defesa invalida, sua defesa deve ser maior que 0 e menor que 10");
            defesaPesonagem = Number(prompt("Digite a quantidade de defesa do personagem novamente"))
        }
    }else{
        console.log(`O personagem ${personagemNome} tem a defesa igual a ${defesaPesonagem}`);
        
    }
    let ataquePesonagem = Number(prompt("Digite a quantidade de ataque do personagem"))
    if(ataquePesonagem <= 0 || ataquePesonagem >= 20){
        while(ataquePesonagem <= 0 || ataquePesonagem >= 20){
            console.log("Erro,ataque invalida, sua ataque deve ser maior que 0 e menor que 20");
            ataquePesonagem = Number(prompt("Digite a quantidade de ataque do personagem novamente"))
        }
    }else{
        console.log(`O personagem ${personagemNome} tem o ataque igual a ${ataquePesonagem}`);
        
    }
    adicionarPersonagem(personagemNome,vidaPesonagem,ataquePesonagem,defesaPesonagem,)
}



let iniciar = true
while (iniciar) {
    let escolha = prompt("digite : \n1- Para exibir os personagens, \n2- Para exibir as armas, \n3- para exibir os itens, \n4 para adicionar um personagem verificado, \n5- para adicionar uma arma verificada, \n6- para adicionar um  item verificado \n7- para Selecionar um personagem \n8- para selecionar um arma \n9- para selecionar um item \n10- para sair")
    switch(escolha){
        case "1":
            exibirPersonagens()
            break
        case "2":
            exibirArmas()
            break
        case "3":
            exibirItens()
            break
        case "4":
            validarPersonagem()
            break
        case "5":
            validarArma()
            break
        case "6":
            validarItem()
            break
        case "7":
            selecionarPersonagem()
            break
        case "8":
            selecionarArma()
            break
        case "9":
            selecionarItem()
            break
        case "10":
            iniciar = false
            break
        default:
            console.log("Numero invaldio");
            break
            
    }
}
    