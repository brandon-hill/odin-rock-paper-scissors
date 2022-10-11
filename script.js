function getComputerChoice(items) {
  return items[Math.floor(Math.random()*items.length)];
};

const choices = ["rock", "paper", "scissors"];

getComputerChoice(choices);



