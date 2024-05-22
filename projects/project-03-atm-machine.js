import inquirer from 'inquirer';
export default async () => {
    let isRunning = true;
    const users = [
        { id: 1234, name: 'Muhammad Owais', pin: 1234, balance: 5000 },
        { id: 5678, name: 'Asif Nawaz', pin: 5678, balance: 9000 }
    ];
    console.table(users);
    while (isRunning) {
        const { userId, pin } = await inquirer.prompt([
            {
                type: 'number',
                name: 'userId',
                message: 'Enter your User ID:',
                validate: input => !isNaN(parseFloat(input)) || 'Please enter a valid number',
            },
            {
                type: 'number',
                name: 'pin',
                message: 'Enter your PIN:',
                validate: input => !isNaN(parseFloat(input)) || 'Please enter a valid number',
            }
        ]);
        const user = users.find(user => user.id === userId && user.pin === pin);
        if (user) {
            console.log(`Welcome ${user.name}!`);
            let inSession = true;
            while (inSession) {
                const { operation } = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'operation',
                        message: 'Select an operation:',
                        choices: ['Check Balance', 'Deposit', 'Withdraw', 'Quit']
                    }
                ]);
                switch (operation) {
                    case 'Check Balance':
                        console.log(`Your current balance is: ${user.balance}`);
                        break;
                    case 'Deposit':
                        const { depositAmount } = await inquirer.prompt([
                            {
                                type: 'number',
                                name: 'depositAmount',
                                message: 'Enter the amount to deposit:',
                                validate: input => !isNaN(parseFloat(input)) || 'Please enter a valid number',
                            }
                        ]);
                        user.balance += depositAmount;
                        console.log(`Your new balance is: ${user.balance}`);
                        break;
                    case 'Withdraw':
                        const { withdrawAmount } = await inquirer.prompt([
                            {
                                type: 'number',
                                name: 'withdrawAmount',
                                message: 'Enter the amount to withdraw:',
                                validate: input => !isNaN(parseFloat(input)) || 'Please enter a valid number',
                            }
                        ]);
                        if (user.balance >= withdrawAmount) {
                            user.balance -= withdrawAmount;
                            console.log(`Your new balance is: ${user.balance}`);
                        }
                        else {
                            console.log('Insufficient funds!');
                        }
                        break;
                    case 'Quit':
                        inSession = false;
                        isRunning = false;
                        break;
                }
            }
        }
        else {
            console.log('Invalid User ID or PIN. Please try again.');
        }
    }
};
