// Import file system to be able to create SVG file from terminal
const fs = require('fs');
// Import shape classes from the shapes.js file 
const { Circle, Square, Triangle } = require('./shapes');

// Based on user selection for shape, will render a circle, triangle or square 
const renderShape = function (answers) {
    // Check that a shape is selected in order to run function. Otherwise, throw error
    if (!answers.shapeInput) {
        throw new Error('Error: Shape property missing. Please select valid shape.');
    }
    console.log('Shape selected:', answers.shapeInput);
    // Instantiate a new shape variable
    let newShape = '';
    
    
    // switch case to create the newShape in the shape of whichever was chosen by the user via prompting
    switch (answers.shapeInput) {
    
    case 'circle':
        newShape = new Circle(answers.textColor, answers.textContent, answers.shapeColor);
        break;
    
    case 'square':
        newShape = new Square(answers.textColor, answers.textContent, answers.shapeColor);
        break;
    
    case 'triangle':
        newShape = new Triangle(answers.textColor, answers.textContent, answers.shapeColor);
        break;
    
    // If not given input, return an error message
    default:
        throw new Error ('Error: Unable to create shape. Please choose from circle, square or triangle.');  
    };
    
    // Use the newShape and apply this to a template for SVG which should also account for other user input for shape color, text and text color
    return newShape;
};

// creates actual SVG file using file system to write new file
    const createSVG = function (answers) {

    const svgContent = renderShape(answers);

    // Establish a path and name so the file is stored in desired examples folder
    const folderPath = './examples';
    const filePath = `${folderPath}/logo.svg`;

    fs.writeFile(filePath, svgContent.render(), (err) => {
        // Error handling
        if (err) {
            console.error('An error occurred. Unable to write file', err);
        } else {
            console.log('Success! Generated logo.svg');
        }

    });

};

// Export the createSVG function to be called in the index.js file
module.exports = { createSVG, renderShape};