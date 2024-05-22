#! /usr/bin/env node

import inquirer from "inquirer";
import calculator from './projects/project-01-calculator.js';
import numberGuessingGame from './projects/project-02-number-guessing-game.js';
import atmMachine from './projects/project-03-atm-machine.js';

let playGame: boolean = true

while (playGame) {
  
  console.log('---------- WELCOME TO PIAIC Q1 PROJECTS ----------')
  const answer = await inquirer.prompt([{
    type: "list",
    name: "userSelection",
    message: "Select an app to use?",
    choices: ["Calculator", "Number Guessing Game", "ATM Machine", "Quit"]
  }])
  switch (answer?.userSelection) {
    case 'Quit':
      console.log('---------- BYE BYE ----------')
      playGame = false;      
      break;

    case 'Calculator':
      console.log('---------- CALCULATOR APP ----------')
      await calculator();
      break;

    case 'Number Guessing Game':
      console.log('---------- Number Guessing Game ----------')
      await numberGuessingGame();
      break;

    case 'ATM Machine':
      console.log('---------- ATM MACHINE ----------')
      await atmMachine();
      break;

  
    default:
      break;
  }
  playGame = answer?.userSelection !== "Quit"
}