let comecar = true
let personagens = [
    {nome : "a",
    classe : "",
    nivel : "",
    hp : "",
    habilidade : []},
]
let historicoDeAcoes = []

function adicionarPersonagem(nome,classe,nivel,hp,habilidade){
   const novoPersonagem = {
    nome : nome,
    classe : classe,
    nivel : nivel,
    hp : hp,
    habilidade : habilidade
   } 
   personagens.push(novoPersonagem)
   console.log("Informações do seu novo personagem \n",personagens);
}



while(comecar){
    let selecionar =prompt("Digite o número da ação que você deseja realizar, \n1 para visualizar seu personagens \n2 para cadastrar um novo personagem \n3 para fazer o personagem realizar uma ação \n4 para ver o historico de ações ")

    switch(selecionar){
        case "1":
            console.log(personagens);
            break
        case "2":
        let novoNome = prompt("Digite um nome")
        let novaClasse = prompt("Digite a classe do personagem entre \n Arqueiro, \n Guerreiro \n Ladino \n Assasino \n Espião")
        let novoNivel = Number(prompt("Digite o nivel do seu personagem"))
        let novoHp = Number(prompt("Digite o hp do seu personagem"))
        let novaHabilidade = prompt("Digite a sua habilidade")
        adicionarPersonagem(novoNome,novaClasse,novoNivel,novoHp,novaHabilidade)
        break
        case "3":
            console.log(personagens);
            let qualPersonagem = prompt("Qual personagem você quer escolher para fazer uma ação ")
            switch(qualPersonagem){
                
            }
        case "10":
            comecar = false
            break
            
    }
}