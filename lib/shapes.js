class Shape {
   constructor(textColor, textContent, shapeColor) {
        this.textColor = textColor;
        this.text = textContent;
        this.shapeColor = shapeColor;
   }
};


class Circle extends Shape {
    constructor(textColor, textContent, shapeColor) {
    super(textColor, textContent, shapeColor)
    };

    renderShape () {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
    };  
};

class Square extends Shape {
constructor(textColor, textContent, shapeColor) {
super(textColor, textContent, shapeColor)
    }

    renderShape () {
        return `<rect width="100%" height="100%" fill="${this.shapeColor}"/>`
    };    
}; 

class Triangle extends Shape {
constructor(textColor, textContent, shapeColor) {
super(textColor, textContent, shapeColor)
    }

    renderShape () {
        return `<polygon points ="150,45 300,300 0,300" fill="${this.shapeColor}"/>`
    };  
};




const renderShape = function (shape) {

    return shape.renderShape();

}


module.exports = { Circle, Square, Triangle };