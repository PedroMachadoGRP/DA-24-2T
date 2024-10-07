let abacate = Number(prompt("Digite o nome"))
if(isNaN(abacate) === false){
    while(isNaN(abacate) === false){
        console.log("Erro,você digitou um número,você deve digitar uma letra para o nome");
        abacate = prompt("Digite o nome novamente")
    }
}else{
    console.log("Voce digitou o nome corretamente");
    
}