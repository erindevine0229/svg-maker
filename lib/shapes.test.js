const { Circle, Square, Triangle } = require("./lib/shapes.js");

// Sets up a testing suite for Shapes
describe('Shapes', () => {

// This is a test to assure a circle shape will be rendered when the renderShape function runs with the answer of "circle" from user when prompted in CLI
describe('Test for circle shape', () => {
    it('should return a circle shape when circle selected from user prompts', () => {
            const expectResult = '<circle cx="150" cy="100" r="80"/>';
            const actualResult = new Circle();
            expect(actualResult.render()).toEqual(expectResult);
    });

});




// This is a test to assure a square shape will be rendered when the renderShape function runs with the answer of "square" from user when prompted in CLI
describe('Test for square shape', () => {
    it('should return a circle shape when square selected from user prompts', () => {
            const expectResult = '<rect width="100%" height="100%"/>';
            const actualResult = new Square();
            expect(actualResult.render()).toEqual(expectResult);
    });

});



// This is a test to assure a triangle shape will be rendered when the renderShape function runs with the answer of "triangle" from user when prompted in CLI
describe('Test for triangle shape', () => {
    it('should return a circle shape when triangle selected from user prompts', () => {
            const expectResult = '<polygon points ="150,45 300,300 0,300"/>';
            const actualResult = new Triangle();
            expect(actualResult.render()).toEqual(expectResult);
    });

});

});