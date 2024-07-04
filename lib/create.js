const { Circle, Square, Triangle } = require('./shape.js');


const createSVG = function (response) {

    let svg =  new SVG (
        response.shape,
        response.text,
        response.shapeColor,
        response.textColor
    );

    return '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'

};



module.exports = createSVG;