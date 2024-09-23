




function contaATe10 () {
      let soma = 11

    for(let contador = 10; contador >= 0; contador-- ) {
        soma --
       

        if(contador % 2 == 0) {
            console.log("Tic ")
        }
        else if(contador % 2 !== 0) {
            console.log("Tac")
        }
        
        if(soma === 0) {
            console.log("BOMMMMMM")
        }
    }

 



}


contaATe10()