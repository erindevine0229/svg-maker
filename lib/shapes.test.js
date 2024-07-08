
const { Circle, Square, Triangle } = require("./shapes.js");



// Sets up testing suite for overall SVG with user inputs

describe('Logo Input Use', () => {

// A test to make sure user input for shapeColor, textColor and textContent are applied apprpriately for circle selection

        describe('User inputs test', () => {
            it('should return an SVG that is a blue circle with yellow text saying IDK', () => {
                const shapeColor = 'blue';
                const textColor = 'yellow';
                const textContent = 'IDK';
                const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue"/><text x="150" y="125" fill="yellow" text-anchor="middle" font-size="60">IDK</text></svg>`;
                const actualSVG = new Circle(textColor, textContent, shapeColor);
                expect(actualSVG.render()).toEqual(expectedSVG);
                });

            });

// A test to make sure user input for shapeColor, textColor and textContent are applied apprpriately for square selection
        describe('User inputs test', () => {
            it('should return an SVG that is a green square with white text saying HEY', () => {
                const shapeColor = 'green';
                const textColor = 'white';
                const textContent = 'HEY';
                const expectedSVG = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="green"/><text x="150" y="150" fill="white" text-anchor="middle" font-size="60">HEY</text></svg>`;
                const actualSVG = new Square(textColor, textContent, shapeColor);
                expect(actualSVG.render()).toEqual(expectedSVG);
                });
        
            });
    
// A test to make sure user input for shapeColor, textColor and textContent are applied apprpriately for triangle selection
        describe('User inputs test', () => {
            it('should return an SVG that is a purple triangle with orange text saying WOW', () => {
                const shapeColor = 'purple';
                const textColor = 'orange';
                const textContent = 'WOW';
                const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points ="150,45 300,300 0,300" fill="purple"/><text x="150" y="150" fill="orange" text-anchor="middle" font-size="30">WOW</text></svg>`;
                const actualSVG = new Triangle(textColor, textContent, shapeColor);
                expect(actualSVG.render()).toEqual(expectedSVG);
                });
        
            });

});


