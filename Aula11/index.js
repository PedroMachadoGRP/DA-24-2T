/*
const respostaDoUsuario = prompt("Digite o número que você quer testar") // Faz uma requisição para que o usuario digite um número
const numero = Number(respostaDoUsuario) //transforma a resposta do usuario em um Number
if(numero % 2 === 0 ){ // compara se o resto da resposta do usuario dividio por 2 é igual a zero
    console.log("Passou no teste");
}else{
    console.log("Não passou no teste");
    
}
*/
/*
let fruta = prompt("Escolha uma fruta") // Faz um requisição ao usuario para inserir o nome da fruta
let preco // define o preço com Undefined
switch(fruta){ // condicional para apresentar o preço apartir da fruta definida pelo usuario
    case "Laranha":
        preco = 3.5
        break
    case "Maçã":
        preco = 2.25
        break
    case "uva":
        preco = 0.30
        break
    case "Pêra":
        preco = 5.5
        break
    default :
    preco = 5
    break
}
console.log("O preço da fruta", fruta, "é", "R$", preco); // imprime no console a fruta escolida e seu preço

//A mensagem caso o usuario escreva Maçã ser ("O preço da fruta Maçã é R$ 2.25")

//c) Seria imprimiodo no console os preço da perâ assim com o do default
*/
/*
const numero = Number(prompt("Digite o primeiro número.")) // requere ao usuario um número e assim o transformado em númber

if(numero > 0){
    console.log("Esse número passou no teste");
    let mensagem = "Essa mensagem é secreta!!!"
    
}
console.log(mensagem);
//b) caso o usuario digite 10 será exbido "Esse número passou no teste"secreta!!!".Caso o úsuario digitar -10 não sera exibido nada
//c) havera um erro pois a impressão do console está fora do if
*/
/*
let idade =Number(prompt("Digite a sua idade"))
if(idade => 18){
    console.log("Você pode dirigir");
    
}else{
    console.log("Você não pode dirigir");
    
}
*/
/*
let horario = prompt("Digite o seu turno de aula \n M (Matutino) \n V (Vespertino) \n N (Noturno)")
if(horario === "V"){
    console.log("Bom dia!");
}else if (horario === "M"){
    console.log("Boa tarde!");
}else if (horario === "N"){
    console.log("Boa noite!");
}else {
    console.log("Horario não identificado");
}
*/
/*
let horario = prompt("Digite o seu turno de aula \n M (Matutino) \n V (Vespertino) \n N (Noturno)")
switch(horario){
    case "M":
        console.log("Bom dia!");
        break
    case "V":
        console.log("Boa tarde!");
        break
    case "N":
        console.log("Boa noite!");
        break
    default:
        console.log("Horario invalido");
               
}
*/
/*
let genero = prompt("Digite o gênero do filme que você vai assitir")
let precoIngresso = Number(prompt("Digite o preço do ingresso do filme que você vai assistir"))
if(genero === "fantasia" && precoIngresso < 15){
    console.log("Bom filme!");
}else {
    console.log("Escolha outro filme");
    
}
*/
/*
let genero = prompt("Digite o gênero do filme que você vai assitir")
let precoIngresso = Number(prompt("Digite o preço do ingresso do filme que você vai assistir"))
if(genero === "fantasia" && precoIngresso < 15){
    let lanche = prompt("Escolha o que você gostaria de levar para o filme")
    console.log(`Bom filme!. Aproveite o seu ${lanche}`);
}else {
    console.log("Escolha outro filme");
    
}

/*
let nomeCompleto = prompt("Digite seu nome completo")
let tipoDeJogo = prompt("Digite o tipo do jogo : \n IN para internacional \n DO para domestico")
let etapa = prompt("Digite a etapa do jogo: \n SF semi-final \n DT para terceiro lugar \n FL para final")
let categoria = Number(prompt("Digite a categoria do jogo \n 1,2,3,4"))
let quantidadeDoIngresso = Number(prompt("Digite a quantidade de ingressos que deseja comprar"))

switch(categoria){
    case 1:
        switch(etapa){
            case "SF":
                switch(tipoDeJogo){
                    case "IN":
                        let preco = 1320 * 5.65 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para semi-final de ${categoria} categoria seu/seus ingressos terão o preço de ${preco}`);
                        break
                    case "DO":
                        let preco2 = 1320 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para semi-final de ${categoria} categoria seu/seus ingressos terão o preço de ${preco2}`);
                        break
                }break
            case "DT":
                switch(tipoDeJogo){
                    case "IN":
                        let preco = 660 * 5.65 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para terceiro lugar de ${categoria} categoria seu/seus ingressos terão o preço de ${preco}`);
                        break
                    case "DO":
                        let preco2 = 660 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para terceiro lugar de ${categoria} categoria seu/seus ingressos terão o preço de ${preco2}`);
                        break
                }break

            case "FL":
                switch(tipoDeJogo){
                    case "IN":
                        let preco = 1980 * 5.65 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para final de ${categoria} categoria seu/seus ingressos terão o preço de ${preco}`);
                        break
                    case "DO":
                        let preco2 = 1980 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para final de ${categoria} categoria seu/seus ingressos terão o preço de ${preco2}`);
                        break
                }break
        }break
    case 2 :
        switch(etapa){
            case "SF":
                switch(tipoDeJogo){
                    case "IN":
                        let preco = 880 * 5.65 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para semi-final de ${categoria} categoria seu/seus ingressos terão o preço de ${preco}`);
                        break
                    case "DO":
                        let preco2 = 880 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para semi-final de ${categoria} categoria seu/seus ingressos terão o preço de ${preco2}`);
                        break
                }break
            case "DT":
                switch(tipoDeJogo){
                    case "IN":
                        let preco = 440 * 5.65 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para terceiro lugar de ${categoria} categoria seu/seus ingressos terão o preço de ${preco}`);
                        break
                    case "DO":
                        let preco2 = 440 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para terceiro lugar de ${categoria} categoria seu/seus ingressos terão o preço de ${preco2}`);
                        break
                }break

            case "FL":
                switch(tipoDeJogo){
                    case "IN":
                        let preco = 1320 * 5.65 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para final de ${categoria} categoria seu/seus ingressos terão o preço de ${preco}`);
                        break
                    case "DO":
                        let preco2 = 1320 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para final de ${categoria} categoria seu/seus ingressos terão o preço de ${preco2}`);
                        break
                }break
        }break
    case 3 :
        switch(etapa){
            case "SF":
                switch(tipoDeJogo){
                    case "IN":
                        let preco = 550 * 5.65 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para semi-final de ${categoria} categoria seu/seus ingressos terão o preço de ${preco}`);
                        break
                    case "DO":
                        let preco2 = 550 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para semi-final de ${categoria} categoria seu/seus ingressos terão o preço de ${preco2}`);
                        break
                }break
            case "DT":
                switch(tipoDeJogo){
                    case "IN":
                        let preco = 330 * 5.65 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para terceiro lugar de ${categoria} categoria seu/seus ingressos terão o preço de ${preco}`);
                        break
                    case "DO":
                        let preco2 = 330 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para terceiro lugar de ${categoria} categoria seu/seus ingressos terão o preço de ${preco2}`);
                        break
                }break

            case "FL":
                switch(tipoDeJogo){
                    case "IN":
                        let preco = 880 * 5.65 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para final de ${categoria} categoria seu/seus ingressos terão o preço de ${preco}`);
                        break
                    case "DO":
                        let preco2 = 880 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para final de ${categoria} categoria seu/seus ingressos terão o preço de ${preco2}`);
                        break
                }break
        }break
    case 4:
        switch(etapa){
            case "SF":
                switch(tipoDeJogo){
                    case "IN":
                        let preco = 220 * 5.65 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para semi-final de ${categoria} categoria seu/seus ingressos terão o preço de ${preco}`);
                        break
                    case "DO":
                        let preco2 = 220 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para semi-final de ${categoria} categoria seu/seus ingressos terão o preço de ${preco2}`);
                        break
                }break
            case "DT":
                switch(tipoDeJogo){
                    case "IN":
                        let preco = 170 * 5.65 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para terceiro lugar de ${categoria} categoria seu/seus ingressos terão o preço de ${preco}`);
                        break
                    case "DO":
                        let preco2 = 440 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para terceiro lugar de ${categoria} categoria seu/seus ingressos terão o preço de ${preco2}`);
                        break
                }break

            case "FL":
                switch(tipoDeJogo){
                    case "IN":
                        let preco = 330 * 5.65 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para final de ${categoria} categoria seu/seus ingressos terão o preço de ${preco}`);
                        break
                    case "DO":
                        let preco2 = 330 * quantidadeDoIngresso
                        console.log(`Ola ${nomeCompleto} seu ingresso ${tipoDeJogo} para final de ${categoria} categoria seu/seus ingressos terão o preço de ${preco2}`);
                        break
                }break
        }break

}      
*/