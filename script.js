function getComputerSelection(items) {
  let computerSelection = items[Math.floor(Math.random()*items.length)];
  return computerSelection;
};

// Get player selection and ensure it's valid
function getPlayerSelection(promptMessage) { 
  let playerSelection = '';

  do {
    playerSelection = prompt(`${promptMessage}`).toLowerCase();

    // Alert user if input is invalid
    if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
      alert("Invalid input. Type rock, paper, or scissors to play"); 
      playerSelection = false;
    }
  } while (!playerSelection);
  
  console.log(playerSelection);
  return playerSelection;
}



// Determine results
function playRound(computerSelection, playerSelection) {
  if (playerSelection == computerSelection) {
    alert("draw");
    return "draw";
  } else if (playerSelection == "rock" && computerSelection == "paper"){ 
    alert("You lose! Paper beats rock");
    return "lose"
  } else if (playerSelection == "rock" && computerSelection == "scissors"){
    alert("You win! Rock beats scissors");
    return "win";
  } else if (playerSelection == "paper" && computerSelection == "rock"){
    alert("You win! Paper beats rock");
    return "win";
  } else if (playerSelection == "paper" && computerSelection == "scissors"){
    alert("You lose! Scissors beats paper");
    return "lose";
  } else if (playerSelection == "scissors" && computerSelection == "rock"){
    alert("You lose! Rock beats scissors");
    return "lose";
  } else if (playerSelection == "scissors" && computerSelection == "paper"){
    alert("You win! Scissors beats paper");
    return "win"; 
  } else {
    alert("There was an error, please try again!");
    return false;
  }
};

// Start a 5 round game
function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
    // Get computer's choice
    const choices = ["rock", "paper", "scissors"];
    let computerSelection = getComputerSelection(choices);

    let playerSelection = 0;
    // Prompt player for input and show score
    if (i === 0){
      playerSelection = getPlayerSelection("Let's play rock paper scissors!\nType rock, paper, or scissors to play");
    } else {
      playerSelection = getPlayerSelection(`Computer: ${computerScore}\nYou: ${playerScore}\n\nType rock paper or scissors to play round ${(i + 1)}`);
    }

    let result = playRound(computerSelection, playerSelection);

    if (result == "draw" || result == false) {
      i--;
    } else if (result == "lose") {
      computerScore++;
    } else {
      playerScore++;
    }
  }

  if (playerScore > computerScore) {
    alert(`Congrats!\nYou won the game ${playerScore} to ${computerScore}.`);
    game();
  } else {
    alert(`The computer wins this game, ${computerScore} to ${playerScore}.\nBetter luck next time!`);
    game();
  }
}

game();