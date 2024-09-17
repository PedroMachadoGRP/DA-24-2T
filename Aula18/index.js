/*
const filme = {
    nome : "Auto da Compadecida",
    ano : 2000,
    elenco : [
        "","Selton Mello", "Denise Fraga", "Virginia Cavendish"
    ],
    transmissoesHoje: [
        {canal : "Telecine", horario: "21H"},
        {canal : "Canal Brasil", horario : "19h"},
        {canal : "Globo", horario: "14h"}
    ]
}
console.log(filme.elenco[0]); // Será imprimido no console "Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1]); // Será imprimido no console "Virginia Cavendish"
console.log(filme.transmissoesHoje[2]); //Será imprimido no console "canal : "Globo", horario: "14h""
*/
/*
const cachorro = {
    nome : "juca",
    idade : 3,
    raca: "SRD"
}
const gato = {...cachorro,nome:"Juba"}

const tartaruga = {...gato, nome : gato.nome.replaceAll("a","o")}

console.log(cachorro); // Sera imprimido o objeto cachorro com nome jucam idade 3 e raça SRD
console.log(gato); // Será imprimido o objeto gato que é uma copia do objeto cachorro com o nome "Juba" e raça "SRD"
console.log(tartaruga); // Será imprimido no console o objeto tartaruga que é uma copia do objeto gato e também substituira a letra "a" do nome do gato por "o" assim tendo o nome de "Jubo"
//A sintaxe com três pontos copia o objeto sinalizado
*/
/*
function minhaFuncao(objeto, propriedade){
    return objeto [propriedade]
}
const pessoa = {
    nome: "Caio",
    idade : 23,
    backender : false
}
console.log(minhaFuncao(pessoa, "backender")); // Será imprimido false
console.log(minhaFuncao(pessoa, "Altura")); // Será imprimido undefined, porque "Altura" não foi definido no objeto
*/
/* Arrumar depois
const nome = {
    nome  : "Sandro",
    apelidos : ["San","Sander","S"]
}
function novoNome(newName){
    newName = {
        nome : "Carlos",
        apelidos : ["Carl","Carlinhos" ,"Carros"]
    }
    console.log(`Eu sou ${newName.nome} e meu apelidos são : ${newName.apelidos[0]},${newName.apelidos[1]} e ${newName.apelidos[2]}`);
}
novoNome()

const nome2 = {
    ...nome,
    apelidos : ["Sauro","Sanderson","Sandeiro"]
}
novoNome()
*/
/*
let pessoa1 = {
    nome : "Evaristo",
    idade : 37,
    profissao : "Gerente de contabilidade"
}
let pessoa2 = {
    nome : "Evertom",
    idade : 28,
    profissao : "Marceneiro"
}
let lista = function(){
    let nomes = []
    nomes.push(pessoa1.nome)
    nomes.push(pessoa1.nome.length)
    nomes.push(pessoa1.idade)
    nomes.push(pessoa1.profissao)
    nomes.push(pessoa1.profissao.length)
    nomes.push(pessoa2.nome)
    nomes.push(pessoa2.nome.length)
    nomes.push(pessoa2.idade)
    nomes.push(pessoa2.profissao)
    nomes.push(pessoa2.profissao.length)
   console.log(nomes);  
}
lista()
*/
/*
let carrinho = []

const maca = {
    nome : "Maçã",
    disponibilidade : true,

}
const abacaxi = {
    nome : "Abacaxi",
    disponibilidade : true,
    
}
const uva = {
    nome : "Uva",
    disponibilidade : true,
    
}
function adicionadoCarrinho(maca,abacaxi,uva){
    carrinho.push(maca,abacaxi,uva)
    console.log(carrinho);
    
}
adicionadoCarrinho(maca,abacaxi,uva)
*/

