#! /usr/bin/env node

import inquirer from "inquirer";
import calculator from './projects/project-01-calculator.js';

let playGame: boolean = true

while (playGame) {
  
  console.log('---------- WELCOME TO PIAIC Q1 PROJECTS ----------')
  const answer = await inquirer.prompt([{
    type: "list",
    name: "userSelection",
    message: "Select an app to use?",
    choices: ["Calculator", "Quit"]
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
  
    default:
      break;
  }
  playGame = answer?.userSelection !== "Quit"
}