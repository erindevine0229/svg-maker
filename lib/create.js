const { Circle, Square, Triangle } = require('./shape.js');


const createSVG = function (selectedShape, shapeColor, textColor, textContent) {

  let newShape;

  switch (selectedShape) {

    case 'circle':
        newShape = new Circle(shapeColor, textColor, textContent);
        break;

    case 'square':
        newShape = new Square(shapeColor, textColor, textContent);
        break;

    case 'triangle':
        newShape = new Triangle(shapeColor, textColor, textContent);
        break;

    default:
        return 'Error: Unable to create shape.';
      }

    return newShape.render();
};



module.exports = createSVG;