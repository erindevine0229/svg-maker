const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt ([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter lgoo text (Must be up to 3 characters only)'
    },

    {
        type: 'input',
        name: 'color',
        message: 'Please enter a color (key word or hexadecimal number) for the text'
    },

    {
        type: 'list',
        name: 'shape',
        message: 'Please select one of the following shapes',
        choices: ['circle', 'square', 'triangle']  
    },

    {
        type: 'input',
        name: 'color',
        message: 'Please enter a color (key word or hexadecimal number) for the shape'
    },


])


const generateSVG = function () {

};