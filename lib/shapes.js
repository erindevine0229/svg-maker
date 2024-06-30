class Shape {
   constructor(textColor, textContent, shapeColor) {
        this.textColor = textColor;
        this.text = textContent;
        this.shapeColor = shapeColor;
   }
}


class Circle extends Shape {
    constructor(textColor, textContent, shapeColor) {
    super(textColor, textContent, shapeColor);
    }

    renderShape () {
        const svg = document.createElement('svg');
        svg.setAttribute('width', 100);
        svg.setAttribute('height', 100);
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        const circle = document.createElement('circle');
        circle.setAttribute('cx', '50');
        circle.setAttribute('cy', '50');
        circle.setAttribute('r', '40');
        circle.setAttribute('fill', `${this.shapeColor}`);

        const text = document.createElement('text');
        text.setAttribute('x', '50');
        text.setAttribute('y', '50');
        text.setAttribute('fill', `${this.textColor}`);
        text.textContent = this.textContent;

        svg.appendChild(circle);
        svg.appendChild(text);

        return svg;

    }
    
}

class Square extends Shape {
constructor(textColor, textContent, shapeColor) {
super(textColor, textContent, shapeColor)
    }


    renderShape () {
        const svg = document.createElement('svg');
        svg.setAttribute('width', 100);
        svg.setAttribute('height', 100);
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        const square = document.createElement('square');
        square.setAttribute('cx', '50');
        square.setAttribute('cy', '50');
        square.setAttribute('r', '40');
        square.setAttribute('fill', `${this.shapeColor}`);

        const text = document.createElement('text');
        text.setAttribute('x', '50');
        text.setAttribute('y', '50');
        text.setAttribute('fill', `${this.textColor}`);
        text.textContent = this.textContent;

        svg.appendChild(square);
        svg.appendChild(text);

        return svg;

    };    
} 

class Triangle extends Shape {
constructor(textColor, textContent, shapeColor) {
super(textColor, textContent, shapeColor)
    }
}




const makeShape = function () {

}