

// Create a class called Shape to set the properties of text color, shape color and text content (taken from user input)
class Shape {
   constructor(textColor, textContent, shapeColor) {
        this.textColor = textColor;
        this.text = textContent;
        this.shapeColor = shapeColor;
   }
};

// extend the Shape class information and add geomatric points needed to create the circle shape (info from W3 Schools)
class Circle extends Shape {
    constructor(textColor, textContent, shapeColor) {
    super(textColor, textContent, shapeColor)
    };

    render() {
        return `<circle cx="150" cy="100" r="80"/>`
    };  
};

// extend the Shape class information and add geomatric points needed to create the square shape (info from W3 Schools)
class Square extends Shape {
constructor(textColor, textContent, shapeColor) {
super(textColor, textContent, shapeColor)
    }

    render() {
        return `<rect width="100%" height="100%"/>`
    };    
}; 

// extend the Shape class information and add geomatric points needed to create the triangle shape (info from W3 Schools)
class Triangle extends Shape {
constructor(textColor, textContent, shapeColor) {
super(textColor, textContent, shapeColor)
    }

    render() {
        return `<polygon points ="150,45 300,300 0,300"/>`
    };  
};



// export the classes for each shape to be called in outside functions
module.exports = { Circle, Square, Triangle };