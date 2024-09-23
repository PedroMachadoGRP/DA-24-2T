const personagens = [
    {
        nome : "Arnaldo",classe : "Mago", nivel: 10,hp : 50, habilidades : ["Bola de fogo"],historicoAcoes: []},
    {
        nome : "Pedro", classe : "Guerreiro", nivel: 20, hp: 100, habilidades : ["Voar"], historicoAcoes: []
    } 
]
function adicionarPersonagem(nome,classe,nivel,hp,habilidade){ //Função para adicionar personagem
   const novoPersonagem = {
    nome : nome,
    classe : classe,
    nivel : nivel,
    hp : hp,
    habilidades :[habilidade],
    historicoAcoes : []
   } 
   personagens.push(novoPersonagem) // Envia as informações do novo personagem para o array de personagem
   console.log("Personagem adicionado com sucesso");
   
}
function exibirPersonagens(){ // Função para exibir o array de objetos no console
    for(let i in personagens){ // laço para percorrer o array de personagem
        console.log(personagens[i]);
        personagens.sort(function(a,b){ // Função para ordenar o array de objetos em ordem alfabética
            if(a.nome < b.nome){
                return -1
            }else{
                return true
            }
            })
        
    }


}
function bucarPersonagem(nome){ // função para buscar e identificar se o personagem expecifico existe no array de personagens
    const personagensId = nome
    const personagemEncontradao = personagens.find(personagen => personagen.nome === nome) // Verificação se o nome do personagem consta no array de personagens
    if(personagemEncontradao){
        console.log(`Personagem ${nome} encontrado com sucesso. Seus atributos são 
            \n Nome:${personagemEncontradao.nome} 
            \n Classe: ${personagemEncontradao.classe} 
            \n Nível:${personagemEncontradao.nivel} 
            \n Hp:${personagemEncontradao.hp} 
            \n Habilidades:${personagemEncontradao.habilidades}
            \n Ações: ${personagemEncontradao.historicoAcoes}`);
            
    }else{
        console.log("Personagem não encontrado");
        
    }
}
function personagemAgir(personagem,habilidade,historicoAcoes){ //Função para identificar e enviar a ação do personagem para o historico de ações
    bucarPersonagem(personagem)
    const persoangemHabilidade = habilidade
    const usarHabilidade = personagens.find(pessoa => pessoa.habilidades[0] === habilidade) // verificação se a habilidade consta dentro do array de habilidades
    if(usarHabilidade){
        usarHabilidade.historicoAcoes.push(habilidade) //envia a habilidade utilizada para o array de historico de ações
        console.log(`Habilidade ${habilidade} foi usada`); 
    }else{
        console.log("Habilidade não encontrada");
    }
}
function excluirPersonagem(personagens,nome,valor){ // Função para identificar e excluir o personagem desejado
    return personagens.filter(function(i){return i[nome] !== valor})

}
let comecar = true
while(comecar){ //Looping para fazer um menu usando switch
    let selecionar = prompt("Digite o número da ação que você deseja realizar, \n1- Listar Todos os Personagens: \n2- Cadastro de Personagens: \n3- para fazer o personagem realizar uma ação \n4- Busca de Personagens por Nome: \n5- Excluir personagem  \n6- Sair")


    switch(selecionar){ //Switch para selecionar a função desejada
        case "1"://Exibir personagens
            exibirPersonagens()
            break
        case "2"://Adicionar personagens
        let novoNome = prompt("Digite um nome")
        let novaClasse = prompt("Digite a classe do personagem")
        let novoNivel = Number(prompt("Digite o nivel do seu personagem"))
        let novoHp = Number(prompt("Digite o hp do seu personagem"))
        let novaHabilidade = prompt("Digite a sua habilidade")
        adicionarPersonagem(novoNome,novaClasse,novoNivel,novoHp,novaHabilidade)
        break
        case "3": //Ações do personagem
            let persoangemEscolido = prompt("Digite o nome do personagem que ira realizar a ação")
            let habilidadeUsada = prompt("Digite o nome da habilidade usada")
            personagemAgir(persoangemEscolido,habilidadeUsada)
            break

        case "4"://Buscar personagens
            let qualPersonagem2 = prompt("Qual personagem você deseja buscar ")
            bucarPersonagem(qualPersonagem2)
            break
        case "5": // Excluir personagem
            exibirPersonagens()
            let excluir = prompt("Digite o nome do persoangem que você deseja excluir")
            let persoangens2 = excluirPersonagem(personagens,"nome",excluir)
            console.log(persoangens2);
            break            
        case "6": // Finaliza o while
            comecar = false
            break
        default :
        console.log("Número invalido");
        
    }
}