const fs = require('fs');


const createSVG = function () {

const svgContent = `<svg version='1.1' width='300' height='200' fill='${response.shapeColor}' xmlns='http://www.w3.org/2000/svg'></svg>
                <text x='150' y='100' fill='${response.textColor}' text-anchor='middle'>${response.text}</text></svg>`;


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
module.exports = { createSVG } ;