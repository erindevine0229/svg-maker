const inquirer = require('inquirer');


inquirer.prompt ([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter text (Must be 3 characters only)'
    },

    {
        type: 'input',
        name: 'color',
        message: 'Please enter a color key word or hexadecimal number'
    },

    {
        type: 'list',
        name: 'shape',
        message: 'Please select one of the following shapes',
        choices: ['circle', 'triangle', 'square']  
    }




])