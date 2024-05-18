#! /usr/bin/env node
import inquirer from "inquirer";
import calculator from './projects/project-01-calculator.js';
import numberGuessingGame from './projects/project-02-number-guessing-game.js';
let playGame = true;
while (playGame) {
    console.log('---------- WELCOME TO PIAIC Q1 PROJECTS ----------');
    const answer = await inquirer.prompt([{
            type: "list",
            name: "userSelection",
            message: "Select an app to use?",
            choices: ["Calculator", "Number Guessing Game", "Quit"]
        }]);
    switch (answer?.userSelection) {
        case 'Quit':
            console.log('---------- BYE BYE ----------');
            playGame = false;
            break;
        case 'Calculator':
            console.log('---------- CALCULATOR APP ----------');
            await calculator();
            break;
        case 'Number Guessing Game':
            console.log('---------- Number Guessing Game ----------');
            await numberGuessingGame();
            break;
        default:
            break;
    }
    playGame = answer?.userSelection !== "Quit";
}
