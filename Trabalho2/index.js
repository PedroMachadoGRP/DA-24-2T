const comecar = true
const personagens = [
    {nome : "Place holder",
    classe : "any",
    nivel : "100",
    hp : "999",
    habilidade : ["Invensibilidade","Poder infinito"]},
]
const historicoDeAcoes = []

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
function visualizarPersonagem(){
    console.table(personagens)
    
}
visualizarPersonagem()

while(comecar){
    let selecionar = prompt("Digite o número da ação que você deseja realizar, \n1 para visualizar seu personagens \n2 para cadastrar um novo personagem \n3 para fazer o personagem realizar uma ação \n4 para ver o historico de ações ")

    switch(selecionar){
        case "1":
            visualizarPersonagem()
            break
        case "2":
        let novoNome = prompt("Digite um nome")
        let novaClasse = prompt("Digite a classe do personagem")
        let novoNivel = Number(prompt("Digite o nivel do seu personagem"))
        let novoHp = Number(prompt("Digite o hp do seu personagem"))
        let novaHabilidade = prompt("Digite a sua habilidade")
        adicionarPersonagem(novoNome,novaClasse,novoNivel,novoHp,novaHabilidade)
        break
        case "3":
            visualizarPersonagem()
            let qualPersonagem = prompt("Qual personagem você quer escolher para fazer uma ação ")
            if(personagens.includes(qualPersonagem)){
                console.log("Personagem selecionado com sucesso"); 
            }else {
                console.log("Personagem invalido");
                break
            }
        case "10":
            comecar = false
            break
            
    }
}
