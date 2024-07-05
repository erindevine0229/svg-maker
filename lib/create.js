const fs = require('fs');
const { Circle, Square, Triangle } = require('./shapes');


const renderShape = function (answers) {

    // Instantiate a new shape variable
    let newShape = '';
    
    
    // switch case to create the newShape in the shape of whichever was chosen by the user via prompting
    switch (answers.shape) {
    
    case 'circle':
        newShape = new Circle(answers.shapeColor, answers.textColor, answers.textContent);
        break;
    
    case 'square':
        newShape = new Square(answers.shapeColor, answers.textColor, answers.textContent);
        break;
    
    case 'triangle':
        newShape = new Triangle(answers.shapeColor, answers.textColor, answers.textContent);
        break;
    
        // If not given input, return an error message
    default:
        throw new Error ('Error: Unable to create shape.');  
    };
    
    return newShape.render();
    };



const createSVG = function (answers) {

const svgContent = `<svg version='1.1' width='300' height='200' fill='${answers.shapeColor}' xmlns='http://www.w3.org/2000/svg'>
                <text x='150' y='100' fill='${answers.textColor}' text-anchor='middle'>${answers.textContent}</text></svg>`;


const folderPath = './examples';
const filePath = `${folderPath}/exampleSVG.svg`;

fs.writeFile(filePath, svgContent, (err) => {
    if (err) {
        console.error('An error occurred. Unable to write file', err);
    } else {
        console.log('Success! SVG logo file completed.');
    }

});

};

// Export the createSVG function to be called in the index.js file
module.exports = { createSVG, renderShape} ;