let personagens = [ //Array de objeto Personagens
    {nome : "Link", vida : 20, ataque: 25, defesa: 5 },
    {nome : "Zelda", vida : 5, ataque: 5, defesa: 25 },
    {nome : "Ganondorf", vida : 21, ataque: 100, defesa: 51 },
    {nome : "a",vida : "batata",ataque : 1, defesa : 1},
    {nome : "1", vida : 21, ataque: "explosão", defesa: 51 },
    {nome : "43", vida : 21, ataque: 100, defesa: -51 },
    {nome : "-1", vida : -21, ataque: 100, defesa: 51 },
    {nome : "0.2", vida : "gogeta melhor que vegeto", ataque: "Três", defesa: 51 },
    {nome : "ghdfhdrghdrgdsgs", vida : -21, ataque: "Super", defesa: "Thanos" },
    
]

let armas = [ // Array de objetos Armas
    {nome : "Links swords", dano : 5, alcance : 5},
    {nome : "Graveto de arvore", dano : 1, alcance: 2555},
    {nome : "Master sword", dano : 22, alcance : 201},
    {nome : "1", dano : 1, alcance: "Eu sou a velocidade"},
    {nome : "Palito", dano : "745745764", alcance: 99},
    {nome : "123456789", dano : 5555, alcance: 2},
    {nome : "43567864", dano : 16565, alcance: 2124213412},
]

let itens = [ // Array de objetos Itens
    {nome: "Rupie", tipo: "Dinheiro",quantidade : 21},
    {nome: "Hookshot", tipo: "Exploração",quantidade : 20},
    {nome: "Ocarina of time", tipo: "Música",quantidade : 21},
    {nome: "123345666", tipo: 12421,quantidade : 2000},
    {nome: "Hookshot", tipo: "Exploração",quantidade : "Mil"},
    {nome: "Hookshot", tipo: "5423215788",quantidade : 20},
]

function selecionarPersonagem(){ //Função para selecionar um personagem
    console.table(personagens);//Chamando o array de personagens em uma tabela
    
    let personaNome = Number(prompt("Digite o nome do personagem a ser selecionado "))
    if(isNaN(personaNome) === false){ //condicional para detctar se o usuario digitou um número
        while(isNaN(personaNome) === false){ //Looping para fazer o usuario digitar uma string
            console.log("Erro,você digitou um número,você deve digitar uma letra para o nome");
            personaNome = Number(prompt("Digite o nome novamente"))
        }
    }else{
        console.log("Voce digitou o nome corretamente");
        
    }
    let personagem = personagens.find(personagem => personagem.nome === personaNome) // Procura no array de personagens se a variavel anterior se encaixa nos crtérios
    while(personagem === undefined){ // Looping para fazer o usuario não digitar um personagem que não existe no array de personagens
        if(personagem === undefined){
            console.log("Erro,personagem não encontrado");
            let personaNome = prompt("Digite o nome do personagem a ser selecionado ")
            personagem = personagens.find(personagem => personagem.nome === personaNome) //Re-inserindo a variavel com um novo valor

        }
    }
    if(personagem){ // condicional para selecionar o nome desejado
        let personaNome2 = Number(prompt("Digite o nome do personagem selecionado novamente"))
        if(isNaN(personaNome2) === false){ //condicional para detctar se o usuario digitou um número
            while(isNaN(personaNome2) === false){ //Looping para fazer o usuario digitar uma string 
                console.log("Erro,você digitou um número,você deve digitar uma letra para o nome");
                personaNome2 = prompt("Digite o nome novamente")
            }
        }else{
            console.log("Voce digitou o nome corretamente");
            
        }
        if(personaNome !== personaNome2){ // condicional para identificar se as duas variaveis está iguais
            while(personaNome ==! personaNome2){
                console.log(`Erro, nome de personagem digitado não é igual ao personagem selecionado`);
                personaNome2 = prompt("Digite o nome do personagem selecionado novamente") //Re-inserindo a variavel com um novo valor

            }
        }else {
            console.log("Personagem selecionado corretamente");
        }
        if(isNaN(personagem.ataque) === true){
            while(isNaN(personagem.ataque) === true){
                console.log("Caracter invalido, digite a quantidade de ataque novamente");
                personagem.ataque = Number(prompt("Digite a quantidade de ataque novamente"))
            }
        }
    }if(personagem.ataque <= 0 || personagem.ataque >= 20){ // condicional de comparação para não deixar o usuario digitar um número menor que 0 ou maior que 20 
        while(personagem.ataque <= 0 || personagem.ataque >= 20){ //looping para fazer o usuario  não digitar um valor que seja maior que 0 e menor que 20

            console.log("Erro,o valor de ataque deste personagem deve ser maior que 0 e menor que 20");
            personagem.ataque = Number(prompt("Digite o novo valor do ataque")) //Re-inserindo a variavel com um novo valor
        }
    }else {
        console.log("O valor do ataque está balanceado");
        
    }
    
    if(personagem.vida <= 0 || personagem.vida >= 20){ // condicional de comparação para não deixar o usuario digitar um número menor que 0 ou maior que 20 
        while(personagem.vida <= 0 || personagem.vida >= 20){ //looping para fazer o usuario  não digitar um valor que seja maior que 0 e menor que 20

            console.log("Erro,o valor da vida do personagem deve ser maior que 0 e menor que 20");
            personagem.vida = Number(prompt("Digite o novo valor da vida"))//Re-inserindo a variavel com um novo valor
        }
    }else{
        console.log("A vida do personagem está balanceada");
        
    }
    if(isNaN(personagem.vida) === true){
        while(isNaN(personagem.vida) === true){
            console.log("Caracter invalido, digite a quantidade de vida novamente");
            personagem.vida = Number(prompt("Digite a quantidade de vida novamente"))
        }
    }
    if(personagem.defesa <= 0 || personagem.defesa >= 10){ // condicional de comparação para não deixar o usuario digitar um número menor que 0 ou maior que 20 
        while(personagem.defesa <= 0 || personagem.defesa >= 10){ //looping para fazer o usuario  não digitar um valor que seja maior que 0 e menor que 10
            console.log("Erro, o valor da defesa deve ser maior que 0  e menor que 10")
            personagem.defesa = Number(prompt("Digite o novo valor da defesa")) //Re-inserindo a variavel com um novo valor
            
        }
    }else{
        console.log("O valor da defesa está balanceado");
        
    }
    if(isNaN(personagem.defesa) === true){
        while(isNaN(personagem.defesa) === true){
            console.log("Caracter invalido, digite a quantidade de defesa novamente");
            personagem.defesa = Number(prompt("Digite a quantidade de defesa novamente"))
        }
    }
    
}

function selecionarArma(){ //Função para selecionar uma arma
    console.table(armas); //Chamando o array de armas em uma tabela
    
    let arumaNome = Number(prompt("Digite o nome da arma a ser selecionada"))
    if(isNaN(arumaNome) === false){ //condicional para detctar se o usuario digitou um número
        while(isNaN(arumaNome) === false){
            console.log("Erro,você digitou um número,você deve digitar uma letra para o nome da arma");
            arumaNome = Number(prompt("Digite o nome da arna novamente"))
        }
    }else{
        console.log("Voce digitou o nome corretamente");
        
    }
    let arma = armas.find(arma => arma.nome === arumaNome) // Procura no array de armas se a variavel anterior se encaixa nos crtérios
    while(arma === undefined){ // Looping para fazer o usuario não digitar um personagem que não existe no array de personagens
        if(arma === undefined){
            console.log("Erro,arma não encontrada")
            arumaNome = prompt("Digite o nome da arma a ser selecionada novamente")
            arma = armas.find(arma => arma.nome === arumaNome) //Re-inserindo a variavel com um novo valor
        }
    }
    if(arma){
        let arumaNome2 = Number(prompt("Digite o nome da arma novamente"))
        if(isNaN(arumaNome2) === false){ //condicional para detctar se o usuario digitou um número
            while(isNaN(arumaNome2) === false){ //Looping para fazer o usuario digitar uma string
                console.log("Erro,você digitou um número,você deve digitar uma letra para o nome da arma");
                arumaNome2 = Number(prompt("Digite o nome da arma novamente"))
            }
        }else{
            console.log("Voce digitou o nome corretamente");
            
        }
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
     }
     if(isNaN(arma.dano) === true){
        while(isNaN(arma.dano) === true){
            console.log("Caracter invalido, digite a quantidade de dano novamente");
            arma.dano = Number(prompt("Digite a quantidade de dano novamente"))
        }
    }
     if(arma.alcance <= 0 ||  arma.alcance >= 10 ){ // condicional de comparação para não deixar o usuario digitar um número menor que 0 ou maior que 20 
        while(arma.alcance <= 0 || arma.alcance >= 10 ){ //looping para fazer o usuario  não digitar um valor que seja maior que 0 e menor que 10
            console.log("Erro,o alcance da arma deve ser maior que 0 e menor que 10");
            arma.alcance = Number(prompt("Digite o novo valor do alcance da arma")) //Re-inserindo a variavel com um novo valor
             
        }
     }else{
        console.log("Alcance da arma está balanceado");
     }
     if(isNaN(arma.alcance) === true){
        while(isNaN(arma.alcance) === true){
            console.log("Caracter invalido, digite a quantidade de alcance novamente");
            arma.alcance = Number(prompt("Digite a quantidade de alcance novamente"))
        }
    }
    }
}
function  selecionarItem(){ //Função para selecionar um item
    console.table(itens); // //Chamando o array de itens em uma tabela
     
    let itenNome = Number(prompt("Digite o nome do item a ser selecionado"))
    if(isNaN(itenNome) === false){ //condicional para detctar se o usuario digitou um número
        while(isNaN(itenNome) === false){
            console.log("Erro,você digitou um número,você deve digitar uma letra para o nome do item");
            itenNome = Number(prompt("Digite o nome do item novamente"))
        }
    }else{
        console.log("Voce digitou o nome corretamente");
        
    }
    let item = itens.find(item => item.nome === itenNome) // Procura no array de itens se a variavel anterior se encaixa nos crtérios
    while(item === undefined){ // Looping para fazer o usuario não digitar um personagem que não existe no array de personagens
        if(item === undefined){
            console.log("Erro, item não encontrado")
            itenNome = prompt("Digite o nome do item a ser selecionado novamente")
            item = itens.find(item => item.nome === itenNome) //Re-inserindo a variavel com um novo valor
        }
    }
    let  itenNome2 = Number(prompt("Digite o nome do item novamente"))
    if(isNaN(itenNome2) === false){ //condicional para detctar se o usuario digitou um número
        while(isNaN(itenNome2) === false){ //Looping para fazer o usuario digitar uma string
            console.log("Erro,você digitou um número,você deve digitar uma letra para o nome do item");
            itenNome2 = Number(prompt("Digite o nome do item novamente"))
        }
    }else{
        console.log("Voce digitou o nome corretamente");
        
    }
    if(itenNome2 !== itenNome){
        while(itenNome2 !== itenNome){
            console.log("Erro, o nome do item não é igual ao nome do item selecionado")
            itenNome2 = prompt("Digite o nome do item selecionado novamente") //Re-inserindo a variavel com um novo valor
        }

    }
    let itenTipo = Number(prompt("Digite o tipo do item"))
    if(isNaN(itenTipo) === false){ //condicional para detctar se o usuario digitou um número
        while(isNaN(itenTipo) === false){ //Looping para fazer o usuario digitar uma string
            console.log("Erro,você digitou um número,você deve digitar uma letra para o tipo do item");
            itenTipo = Number(prompt("Digite o tipo do item novamente"))
        }
    }else{
        console.log("Voce digitou o nome corretamente");
        
    }
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

function exibirPersonagens(){  //Função para exibir o array de personagens
    console.table(personagens);
    
}
function exibirArmas(){ //Função para exibir o array de armas
console.table(armas);
}
function exibirItens(){ //Função pra exibir o array de itens
    console.table(itens);
}
function adicionarPersonagem(nome,vida,ataque,defesa){ //Função para adicionar um novo personagem
    const novoPersonagem = {
        nome : nome,
        vida : vida,
        ataque: ataque,
        defesa: defesa
    }
    personagens.push(novoPersonagem) //Envia novo personagem para o array de personagem
    console.table(personagens);
    
}
function adicionarArmas(nome,dano,alcance){ //Função para adicionar uma nova arma
    const novaArma = {
        nome : nome,
        dano : dano,
        alcance : alcance
    }
    armas.push(novaArma) //Envia novo personagem para o array de armas
    console.table(armas);
    
}
function adicionarItens(nome,tipo,quantidade){ //Função para adicionar um novo item
    const novoItem = {
        nome : nome,
        tipo : tipo,
        quantidade : quantidade
    }
    itens.push(novoItem) //Envia novo personagem para o array de itens
    console.table(itens);
    
}
function validarItem(){ //Função para validar um novo personagem
    let itemNome = Number(prompt("Digite o nome do item"))
    if(isNaN(itemNome) === false){ //condicional para detctar se o usuario digitou um número
        while(isNaN(itemNome) === false){ //Looping para fazer o usuario digitar uma string
            console.log("Erro,você digitou um número,você deve digitar uma letra para o nome do item");
            itemNome = Number(prompt("Digite o nome do item novamente"))
        }
    }else{
        console.log("Voce digitou o nome corretamente");
        
    }
    let itemEncontrado = itens.find(item => item.nome === itemNome) //Procura o item dito pelo usuario no array de itens
    if(itemEncontrado){
        while(itemEncontrado){ //Looping para que o usuario não digite um personagem já existente
            console.log("Erro,item já registrado");
            itemNome = prompt("Digite o nome do item novamente")
            itemEncontrado = itens.find(item => item.nome === itemNome)

        }
    }else if(itemNome === ""){
        while(itemNome === ""){ //Looping para que o usuario não digite um item vazio
            console.log("Erro, o nome do item não pode estar vazio");
            itemNome = prompt("Digite o nome do item novamente")
            
        }
    }else{
        console.log(`O item ${itemNome} foi adicionado com sucesso`);
        
    }
    let itemTipo = Number(prompt("Digite o tipo do item"))
    if(isNaN(itemTipo) === false){ //condicional para detctar se o usuario digitou um número
        while(isNaN(itemTipo) === false){ //Looping para fazer o usuario digitar uma string
            console.log("Erro,você digitou um número,você deve digitar uma letra para o tipo do item");
            itemTipo = Number(prompt("Digite o tipo do item novamente"))
        }
    }else{
        console.log("Voce digitou o nome corretamente");
        
    }
    if(itemTipo === ""){
        while(itemTipo === ""){ //Looping para que o usuario não digite o tipo do item como vazio
            console.log("Erro,o tipo do item não pode estar vazio");
            itemTipo = prompt("Digite o tipo do item novamente")
            
        }
    }else {
        console.log(`O tipo do item ${itemNome} é ${itemTipo} `);
        
    }
    let  itemQuantidade = Number(prompt("Digite a quantidade do item"))
    if(isNaN(itemQuantidade) === true){
        while(isNaN(itemQuantidade) === true){
            console.log("Caracter invalido, digite a quantidade de itens novamente");
            itemQuantidade = Number(prompt("Digite a quantidade de itens novamente"))
        }
    }
    if(itemQuantidade <= 0 || itemQuantidade >= 50){ //Condicional para fazer com que o usuario insira uma quantidade de itens maior que 0 e menor que 50
        while(itemQuantidade <= 0 || itemQuantidade >= 50){ //Looping para fazer com que o  usuarion não consiga digitar uma quantidade de itens inferior a 0 e superior a 50
            console.log("Erro,quantidade invalida, a quantidade deve ser maior que 0 e menor que 50");
           itemQuantidade = Number(prompt("Digite a quantidade de itens novamente"))
        }
    }else {
        console.log(`A quantidade do item ${itemNome} é ${itemQuantidade}`);
    }
    adicionarItens(itemNome,itemTipo,itemQuantidade)

}

function validarArma(){ //Função para validar uma nova arma 
    let armaNome = Number(prompt("Digite o nome da sua arma"))
    if(isNaN(armaNome) === false){ //condicional para detctar se o usuario digitou um número
        while(isNaN(armaNome) === false){ //Looping para fazer o usuario digitar uma string
            console.log("Erro,você digitou um número,você deve digitar uma letra para o nome da arma");
            armaNome = Number(prompt("Digite o nome da arma novamente"))
        }
    }else{
        console.log("Voce digitou o nome corretamente");
        
    }
    let armaEncontradao = armas.find(arma => arma.nome === armaNome)  //Procura a arma dita pelo usuario no array de armas
    if(armaEncontradao){
        while(armaEncontradao){ //Looping para que o usuario não digite uma arma já existente
            console.log("Erro,Arma já registrada");
            armaNome = prompt("Digite o nome da sua arma novamente")
            armaEncontradao = armas.find(arma => arma.nome === armaNome)
            
        }
    }else if(armaNome === ""){
        while (armaNome === "") { //Looping para que o usuario não digite uma arma com nome vazio
            console.log("Erro, o nome da arma não pode ser vazia");
            armaNome = prompt("Digite o nome da sua arma novamente")
        }
        
    }else {
        console.log(`${armaNome} adicionada com sucesso`);
        
    }
    let aramaDano = Number(prompt("Digite o dano da arma"))
    if(isNaN(aramaDano) === true){
        while(isNaN(aramaDano) === true){
            console.log("Caracter invalido, digite a quantidade de dano da arma novamente");
            aramaDano = Number(prompt("Digite a quantidade de dano da arma novamente"))
        }
    }
    if(aramaDano <= 0 ||  aramaDano >= 20){ //Condicional para fazer com que o usuario insira uma quantidade de dano maior que 0 e menor que 20
        while(aramaDano <= 0 ||  aramaDano >= 20){ //Looping para fazer com que o  usuarion não consiga digitar uma quantidade de dano inferior a 0 e superior a 20
            console.log("Erro, o dano da arma deve ser maior que 0 e menor que 20");
            aramaDano = Number(prompt("Digite o dano da arma novamente"))  
        }
    }
    else if(aramaDano === ""){ //condicional para que o usuario não consiga digitar o dano da arma como vazio
        while(aramaDano === ""){ //Looping para que o usuario não consiga inserir um dano vazio
            console.log("Erro,o dano da arama não pode ser vazio");
            aramaDano = Number(prompt("Digite o dano da arma novamente"))
            
        }
    }
    else{
        console.log(`O dano da arma ${armaNome} é ${aramaDano}`);
        
    }
    let aramaAlcanace = Number(prompt("Digite o alcance da arma"))
    if(isNaN(aramaAlcanace) === true){
        while(isNaN(aramaAlcanace) === true){
            console.log("Caracter invalido, digite a quantidade de alcance da arma novamente");
            aramaAlcanace = Number(prompt("Digite a quantidade de alcance da arma novamente"))
        }
    }
    if(aramaAlcanace <= 0 ||  aramaAlcanace >= 10) { //Condicional para fazer com que o usuario insira uma quantidade de alcance maior que 0 e menor que 10
        while(aramaAlcanace <= 0 ||  aramaAlcanace >= 10){ //Looping para fazer com que o  usuarion não consiga digitar uma quantidade de dano inferior a 0 e superior a 10
            console.log("Erro, o alcance da arma deve ser maior que 0 e menor que 10")
            aramaAlcanace = Number(prompt("Digite o alcance da arma novamente"))
        }
    }
        else if(aramaAlcanace === ""){ //condicional para que o usuario não consiga digitar o alcance da arma como vazio
            while(aramaAlcanace === ""){ //Looping para fazer com que o  usuarion não consiga digitar uma quantidade de alcance inferior a 0 e superior a 10
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
    let personagemNome = Number(prompt("Digite o nome do personagem"))
    if(isNaN(personagemNome) === false){ //condicional para detctar se o usuario digitou um número
        while(isNaN(personagemNome) === false){ //Looping para fazer o usuario digitar uma string
            console.log("Erro,você digitou um número,você deve digitar uma letra para o nome");
            personagemNome = Number(prompt("Digite o nome novamente"))
        }
    }else{
        console.log("Voce digitou o nome corretamente");
        
    }
    let personagemEncontradao = personagens.find(personagen => personagen.nome === personagemNome) //Procura o personagem dito pelo usuario no array de personagens
    if(personagemEncontradao){
        while(personagemEncontradao){ //Looping para que o usuario não digite um personagem já existente
            console.log("Erro,personagem já registrado");
            personagemNome = prompt("Digite o nome do personagem novamente")
            personagemEncontradao = personagens.find(personagen => personagen.nome === personagemNome)
        }
    }
    else if(personagemNome === ""){
        while(personagemNome === ""){ //Looping para que o usuario não digite um personagem vazio
            console.log("Erro, nome não pode ser vazio");
            personagemNome = prompt("Digite o nome do personagem novamente")
        }
    }
    else {
        console.log(`${personagemNome} adicionado com sucesso`);
        
    }

    let vidaPesonagem = Number(prompt("Digite a quantidade de vida do personagem"))
    if(isNaN(vidaPesonagem) === true){
        while(isNaN(vidaPesonagem) === true){
            console.log("Caracter invalido, digite a quantidade de vida novamente");
            vidaPesonagem = Number(prompt("Digite a quantidade de vida do personagem novamente"))
        }
    }
    if(vidaPesonagem <= 0 || vidaPesonagem >= 20){ //Condicional para fazer com que o usuario insira uma quantidade de vida maior que 0 e menor que 20
        while(vidaPesonagem <= 0 || vidaPesonagem >= 20){ //Looping para fazer com que o  usuario não consiga digitar uma quantidade de vida inferior a 0 e superior a 20
            console.log("Erro,vida invalida, sua vida deve ser maior que 0 e menor que 20");
            vidaPesonagem = Number(prompt("Digite a quantidade de vida do personagem novamente"))
        }
    }
    else{
        console.log(`O personagem ${personagemNome} tem a vida igual a ${vidaPesonagem}`);
        
    }

    let defesaPesonagem = Number(prompt("Digite a quantidade de defesa do personagem"))
    if(isNaN(defesaPesonagem) === true){
        while(isNaN(defesaPesonagem) === true){
            console.log("Caracter invalido, digite a quantidade de defesa novamente");
            defesaPesonagem = Number(prompt("Digite a quantidade de defesa do personagem novamente"))
        }
    }
    if(defesaPesonagem <= 0 || defesaPesonagem >= 10){ //Condicional para fazer com que o usuario insira uma quantidade de defesa maior que 0 e menor que 10
        while(defesaPesonagem <= 0 || defesaPesonagem >= 10){ //Looping para fazer com que o  usuarion não consiga digitar uma quantidade de defesa inferior a 0 e superior a 10
            console.log("Erro,defesa invalida, sua defesa deve ser maior que 0 e menor que 10");
            defesaPesonagem = Number(prompt("Digite a quantidade de defesa do personagem novamente"))
        }
    }else{
        console.log(`O personagem ${personagemNome} tem a defesa igual a ${defesaPesonagem}`);
        
    }

    let ataquePesonagem = Number(prompt("Digite a quantidade de ataque do personagem"))
    if(isNaN(ataquePesonagem) === true){
        while(isNaN(ataquePesonagem) === true){
            console.log("Caracter invalido, digite a quantidade de ataque novamente");
            ataquePesonagem = Number(prompt("Digite a quantidade de ataque do personagem novamente"))
        }
    }
    if(ataquePesonagem <= 0 || ataquePesonagem >= 20){ //Condicional para fazer com que o usuario insira uma quantidade de ataque maior que 0 e menor que 20
        while(ataquePesonagem <= 0 || ataquePesonagem >= 20){ //Looping para fazer com que o  usuarion não consiga digitar uma quantidade de ataque inferior a 0 e superior a 20
            console.log("Erro,ataque invalida, sua ataque deve ser maior que 0 e menor que 20");
            ataquePesonagem = Number(prompt("Digite a quantidade de ataque do personagem novamente"))
        }
    }else{
        console.log(`O personagem ${personagemNome} tem o ataque igual a ${ataquePesonagem}`);
        
    }
    adicionarPersonagem(personagemNome,vidaPesonagem,ataquePesonagem,defesaPesonagem,)
}
let iniciar = true
while (iniciar) { //Menu para selecionar a função desejada
    let escolha = prompt("digite : \n1- Para exibir os personagens, \n2- Para exibir as armas, \n3- para exibir os itens, \n4- para adicionar um personagem verificado, \n5- para adicionar uma arma verificada, \n6- para adicionar um  item verificado \n7- para Selecionar um personagem \n8- para selecionar um arma \n9- para selecionar um item \n10- para sair")
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
    