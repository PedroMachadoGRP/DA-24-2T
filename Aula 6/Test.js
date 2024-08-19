let numero1 = prompt("Insira o primeiro número")
let num1 = Number(numero1)
let numero2 = prompt("Insira o segundo número")
let num2 = Number(numero2)
let sinal = prompt("Insira o sinal da conta que quer usar")
if(sinal === "+") {
    console.log("Seu resultado é igual a =", num1 + num2);
}
else if (sinal === "-") {
    console.log("Seu resultado é igual a =", num1 - num2);
}
else if (sinal === "/"){
    console.log("Seu resultado é igual a =", num1 / num2);
}
else if (sinal === "*"){
    console.log("Seu resulatdo é igula a = ", num1 * num2);
}
else if (sinal === "¹"){
    console.log("Seu resultado é igual a = ",num1 * num1, "e", num2 * num2 );
}else {
    console.log("Algo deu errado");
    
}