// Import inquirer from npm
const inquirer = require('inquirer');

// Import functions renderShape() and createSVG() from other js files
const { renderShape, newShape } = require('./lib/shapes');
const { createSVG } = require('./lib/create');

// Prompts to get input from user regarding the SVG logo properties
inquirer.prompt ([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter lgoo text (Must be up to 3 characters only)'
    },

    {
        type: 'input',
        name: 'textColor',
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
        name: 'shapeColor',
        message: 'Please enter a color (key word or hexadecimal number) for the shape'
    },


])
// Take user input and call the createSVG function to process the logo SVG
.then((response) => {

createSVG(renderShape(newShape));

});
