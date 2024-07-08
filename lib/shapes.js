

// Create a class called Shape to set the properties of text color, shape color and text content (taken from user input)
class Shape {
   constructor(textColor, textContent, shapeColor) {
        this.textColor = textColor;
        this.textContent = textContent;
        this.shapeColor = shapeColor;
   }
};

// extend the Shape class information and add geoetric points needed to create the circle shape (info from W3 Schools)
class Circle extends Shape {
    constructor(textColor, textContent, shapeColor) {
    super(textColor, textContent, shapeColor)
    };

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" fill="${this.textColor}" text-anchor="middle" font-size="60">${this.textContent}</text></svg>`;
    };  
};

// extend the Shape class information and add geometric points needed to create the square shape (info from W3 Schools)
class Square extends Shape {
constructor(textColor, textContent, shapeColor) {
super(textColor, textContent, shapeColor)
    }

    render() {
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="${this.shapeColor}"/><text x="150" y="150" fill="${this.textColor}" text-anchor="middle" font-size="60">${this.textContent}</text></svg>`;
    };    
}; 

// extend the Shape class information and add geometric points needed to create the triangle shape (info from W3 Schools)
class Triangle extends Shape {
constructor(textColor, textContent, shapeColor) {
super(textColor, textContent, shapeColor)
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points ="150,45 300,300 0,300" fill="${this.shapeColor}"/><text x="150" y="150" fill="${this.textColor}" text-anchor="middle" font-size="30">${this.textContent}</text></svg>`
    };  
};



// export the classes for each shape to be called in outside functions
module.exports = { Circle, Square, Triangle };