const comecar = true
const personagens = [
    {nome : "Place",
    classe : "any",
    nivel : "100",
    hp : "999",
    habilidade : ["Invensibilidade","Poder infinito"]},
    {nome : "andy",
        classe : "any",
        nivel : "100",
        hp : "999",
        habilidade : ["Invensibilidade","Poder infinito"]}
]

let qualPersonagem = prompt("Qual personagem você quer escolher para fazer uma ação ")

const personagemId = qualPersonagem
const personagemEncontradao = personagens.find(personagen => personagen.nome === personagemId)
if(personagemEncontradao){
    console.log("Personagem encontrado com sucesso");
}    let perguntaHabilidade = prompt("Qual habilidade você quer usar?")
const habilidadeId = perguntaHabilidade
const habilidadeEncontrado = personagens.find(habilidade => habilidade.habilidade === habilidadeId)
if(habilidadeEncontrado){
    console.log("Você usou a habilidade", perguntaHabilidade);
    
}else {
    console.log("Algo deu errado");
    
} 

console.log(personagens);
