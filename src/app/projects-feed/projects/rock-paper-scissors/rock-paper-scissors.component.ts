import { Component } from '@angular/core';
import { fadeIn } from 'src/app/models/animations';

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.sass'],
  animations: [
      fadeIn
  ]
})
export class RockPaperScissorsComponent {

userScore = 0
compScore = 0
result = ""
playerWin = false
cpuWin = false

// Main function
begin(userChoice: string) {
    const compChoice: string = this.getCompChoice()
    switch (userChoice + compChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            this.win(userChoice, compChoice)
            this.gameOverCheck()
            break
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            this.lose(userChoice, compChoice)
            this.gameOverCheck()
            break
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            this.draw(userChoice, compChoice)
            this.gameOverCheck()
            break
    }
}

gameOverCheck() {
    if (this.userScore == 10) {
        this.playerWin = true
    } else if (this.compScore == 10) {
        this.cpuWin = true
    } 
}

restart() {
    this.userScore = 0
    this.compScore = 0
    this.result = ""
    this.playerWin = false
    this.cpuWin = false
}

// Randomly selects an option for CPU choice
getCompChoice() {
    const options = ["rock", "paper", "scissors"]
    let randomNumber = Math.floor(Math.random() * 3)
    return options[randomNumber]
}

// Converts string to all uppercase
upper(str: string) {
    let newStr = str.toUpperCase()
    return newStr
}

// If player choice beats CPU choice
win(userChoice: string, compChoice: string) {
    let userChoice_i = document.getElementById(userChoice)
    let userGlow = document.getElementById("user")

    this.userScore++ 
    this.result = `Your ${ this.upper(userChoice) } beats CPU ${ this.upper(compChoice) }. You win!`
    userChoice_i.classList.add('greenGlow')
    setTimeout(function() {userChoice_i.classList.remove('greenGlow') }, 200 )
    userGlow.classList.add('greenGlow')
    setTimeout(function() {userGlow.classList.remove('greenGlow') }, 200 )
}

// If player choice loses to CPU choice
lose(userChoice: string, compChoice: string) {
    let userChoice_i = document.getElementById(userChoice)
    let compGlow = document.getElementById("comp")

    this.compScore++
    this.result = `CPU ${this.upper(compChoice)} beats your ${ this.upper(userChoice)}. Too bad.`
    userChoice_i.classList.add('redGlow')
    setTimeout(function() {userChoice_i.classList.remove('redGlow') }, 200 )
    compGlow.classList.add('redGlow')
    setTimeout(function() {compGlow.classList.remove('redGlow') }, 200 )
}

// If player choice and CPU choice match
draw(userChoice: string, compChoice: string) {
    let userChoice_i = document.getElementById(userChoice)
    this.result = `Your ${ this.upper(userChoice) } matches CPU ${ this.upper(compChoice)}. It's a draw...`
    userChoice_i.classList.add('grayGlow')
    setTimeout(function() {userChoice_i.classList.remove('grayGlow') }, 200 )
}


}