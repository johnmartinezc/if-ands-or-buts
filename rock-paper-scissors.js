const prompt = require('prompt-sync')
({sigint: true})


let rockPaperScissors = ("Rock\n" + "Paper\n" + "Scissors")
console.log(rockPaperScissors)

let player1 = String(prompt("player 1:"))
let player2 = String(prompt("player 2:"))


if(player1 ===  player2  ){
    console.log("its a tie") 
}else if(player1 === 'rock' && player2 === 'paper' ||
         player1 === 'paper' && player2 === 'scissors' ||
         player1 === 'sissors' && player2 === 'rock'){
            console.log("You lose!")
}else if (player1 === 'rock'  && player2 === 'scissors' ||
          player1 === 'paper' && player2 === 'rock' ||
          player1 === 'scissors' && player2 === 'paper'){
            console.log("You win!")
    }else {
        return
    }

