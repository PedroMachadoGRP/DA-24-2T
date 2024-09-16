/*
const professor = {
    nome: 'lucas',
    idade: 32,
    email: "lucas@gmail.com",
    tarefas: ['Dar aula','Responder duvidas'],
    contarPiadas: function(){
        console.log('É pa vê ou pa come?')
    }
}
console.log(professor.nome);
console.log(professor.idade);
console.log(professor["email"]);

professor.nome = 'Leo'
professor["email"] = 'leo@gmail.com'
console.log(professor.nome);
console.log(professor["email"]);
console.log(professor.tarefas[1])
*/
/*
const filme = {
    nome : "Senhor dos aneis",
    diretor : "Peter Jackson",
    data: 2001,
    elenco : ["Elijah Wood","Ian Mckellen","Orlando Bloom"],
    personagens : ["Frodo","Gandalf","Legolas"],
    assistiu : "Não"
}
console.log(filme.nome);
console.log(filme.diretor);
console.log(filme["data"]);
console.log(filme["elenco"]);
console.log(filme["assistiu"]);
console.log(`No filme Senhor do Anéis ${filme.elenco[0]} faz ${filme.personagens[0]},${filme.elenco[1]} faz ${filme.personagens[1]} e ${filme.elenco[2]} faz ${filme.personagens[2]}`);
filme.personagens.splice(0,1)
filme.personagens.unshift("Xuxa")
*/

/*
console.log(filme.nome);
console.log(filme.diretor);
console.log(filme.data);
console.log(filme.elenco);
console.log(filme.personagens);
console.log(filme.assistiu);
*/



/*
const pessoa = {
    nome : "Anderson",
    idade : 23,
    generoMusical : "Rock gosspel",
}
console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta de ${pessoa.generoMusical}`);
*/
/*
const donoDoPet = {
    nome: "Pedro",
    idade : 18,
    pet:{
        nome :"Chocolate",
        raca: "Não sei",
        idade : 2
    }
}
console.log(donoDoPet.pet.nome);
*/
/*
const curso = {
    nome : "Front End Noturno",
    liguagens : ["JS","HTML","CSS"]
}
console.log(curso.liguagens[0]);
curso.numeroEstudantes = 50
curso['numeroProfessires'] = 10
console.log(curso.numeroEstudantes);
console.log(curso.numeroProfessires);
*/
/*
const professores = [
    {nome:'lucas',idade:32,modulo:1},
    {nome:'Leo',idade:29,modulo:2},
    {nome:'Mika',idade:29,modulo:3}
]
console.log(professores[0].nome);
console.log(professores[1].nome);
console.log(professores[2].nome);
*/
/*
const usuario = {
    nome : "prof",
    idade : 27,
    email: "prof@senac.com.br",
    cidade : "São leopoldo"
}
const novoUsuario = {
    ...usuario,
    nome : "Lucas",
    idade : 32,
    cidade : "Canoas"
}
console.log(novoUsuario);

const nomeProfs = ["Lucas","Leo","Mika"]

const novaListaProfs = [...nomeProfs]
console.log(novaListaProfs);
*/
/*
function pessoa(){
    const pessoa = {
        nome : "Anderson",
        idade : 23,
        generoMusical : "Rock gosspel",
        comidasFavoritas : ["Hamburger","Pizza","Suco de laranja"],
        melhorAmigo : {
            nome : "Caio",
            idade : 18
        }
    }
console.log(`O nome da pessoa é ${pessoa.nome} e suas comidas preferidas são ${pessoa.comidasFavoritas[0]},${pessoa.comidasFavoritas[1]}, e ${pessoa.comidasFavoritas[2]}. Seu melhor amigo se chama ${pessoa.melhorAmigo.nome} e tem ${pessoa.melhorAmigo.idade} anos`);
}
pessoa()
*/
let personagens = [
    {nome : "Jotaro",
    idade : 40,
    classe : "Soco",
    poder : ["Star-finger","The world","ORA"]},

    {nome : "Jonny",
    idade : 19,
    classe : "Tiro",
    poder : ["Spin","Rotação aurea","Disparo de unha"]},
    {
    nome : "Gappy",
    idade : 19,
    classe : "Tiro",
    poder : ["Roubo de propriedades","Bolhas","Go byonde"]
    }
]

function adicionarPersonagem(nome,idade,classe,poder){
    const novoPersonagem = {
        nome : "Kakyoin",
        idade : 17,
        classe : "Tiro",
        poder : ["Emerald splash"],
    }
    personagens.push(novoPersonagem)
    console.log(personagens);
    

}

