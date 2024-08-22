/*
let sinal = prompt("Qual conta você deseja realizar\n Soma : + \n Subtração : -  \n Multiplicação : *  \n Divisao : / \n Potenciação : ²")
switch(r){
    case "+" :
        let perguntaSoma = Number(prompt("Insira um número que deseja somar"))
        let pergunta1Soma = Number(prompt("Insira outro número que deseja somar"))
        let soma = perguntaSoma + pergunta1Soma
        console.log("O resultado da soma é: ", soma);
        break
    case "-" :
        let perguntaSub = Number(prompt("Insira um número que deseja subtrair"))
        let pergunta1Sub = Number(prompt("Insira outro número que deseja subtrair"))
        let subtração = perguntaSub - pergunta1Sub
        console.log("O resultado da subtração é: ", subtração);
        break
    case "/" :
        let perguntaDivisao = Number(prompt("Insira um número que deseja dividir"))
        let pergunta1Divisao = Number(prompt("Insira outro número que deseja dividir"))
        let divisao = perguntaDivisao / pergunta1Divisao
        console.log("O resultado da divisão é: ", divisao);
        break
    case "*":
        let perguntaMulti = Number(prompt("Insira um número que deseja Multiplicar"))
        let pergunta1Multi = Number(prompt("Insira outro número que deseja Multiplicar"))
        let multiplicação = perguntaMulti * pergunta1Multi
        console.log("O resultado da multiplicação é: ", multiplicação);
        break
    case "²":
        let perguntaPotencia = Number(prompt("Insira um número que deseja ser potencializado"))
        let apotenciacao = perguntaPotencia * perguntaPotencia
        console.log("O resultado da sua potenciação é: ", apotenciacao);
        break
    default:
        console.log("Invalido");
        break
}
*/

let forma = prompt("Insira a figura geometrica plana que deseja saber a area: \n Quadrado \n Triangulo \n Retangulo \n Losango \n Trapézio \n Circulo")

switch(forma){
    case "Quadrado":
        let ladoQua = Number(prompt("Insira o lado do quadrado"))
        let areaQuadrado = ladoQua * ladoQua * ladoQua
        console.log("A area do quadrado é:", areaQuadrado);
        break
    case "Triangulo":
        let baseTri  = Number(prompt("Insira a base do triangulo"))
        let alturaTri = Number(prompt("Insira a altura do triangulo"))
        let areaTri = (baseTri * alturaTri)/ 2
        console.log("A area do triangulo é:",areaTri);
        break
    case "Retangulo":
        let baseRet = Number(prompt("Insira a base do retangulo"))
        let alturaRet = Number(prompt("Insira a altura do retangulo"))
        let areaRet = baseRet * alturaRet
        console.log("A area do do retangulo é:",areaRet);
        break
    case "Losango":
        let diagonalMenorLosa = Number(prompt("Insira a base menor do losango"))
        let diagonalMaiorLosa = Number(prompt("Insira a base maior do losango"))
        let areaLosa = (diagonalMaiorLosa * diagonalMenorLosa) / 2
        console.log("A area do losango é:", areaLosa);
        break
    case "Trapezio":
        let baseMaiorTra = Number(prompt("Insira a base maior do trapézio"))
        let baseMenorTra = Number(prompt("Insira a base menor do trapézio"))
        let alturaTra = Number(prompt("Insira a altura do trapézio"))
        let areaTra1 = (baseMaiorTra + baseMenorTra) *  alturaTra
        let areaTra2 = areaTra1 / 2
        console.log("A area do trapézio é:", areaTra2);
        break
    case "Circulo":
        let raioCir = Number(prompt("Insira o raio do circulo"))
        let pot = raioCir * raioCir 
        let areaCir = 3.14 * pot
        console.log("A area do circulo é:", areaCir);
        break
    default:
        console.log("Forma invaliada");
        break
        
        
        
        
}