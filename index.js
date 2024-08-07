// Import inquirer from npm for prompting functionality
const inquirer = require('inquirer');

// Import functions renderShape() and createSVG() from other js file
const { renderShape, createSVG } = require('./lib/create');


// Prompts to get input from user regarding the SVG logo properties
inquirer.prompt ([
    {
        type: 'input',
        name: 'textContent',
        message: 'Please enter logo text (Must be up to 3 characters only)',
        validate: function(input) {
            if(input.length >3) {
                return "Error. Please enter a valid response. Must be only 3 characters long!";
            } else {
                return true;
            }
        }
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color (key word or hexadecimal number) for the text'
    },

    {
        type: 'list',
        name: 'shapeInput',
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
.then((answers) => {

const svgContent = renderShape(answers);
console.log(svgContent);

createSVG(answers);

})
// Throw error if not able to execute
.catch(error => {
    console.error('Error:', error);
});
