# SVG Logo Generator Application

## Description
  This is a CLI based application which used inquirer to prompt the user for input regarding properties of a desired logo (SVG format). The user may select between a circle, square and triangle shape and then can choose the color for the text, color for the shape and the content of the text (specified as up to 3 characters).

  Image of successfully created example SVG as seen in the browser:

  ![Screenshot 2024-07-07 at 10 48 50 PM](https://github.com/erindevine0229/svg-maker/assets/166076732/059e43f2-7286-4c0a-8f2c-ebb028de9db9)

  Image of the successfully passes set of tests in Jest: 
  
  <img width="663" alt="Screenshot 2024-07-07 at 10 47 12 PM" src="https://github.com/erindevine0229/svg-maker/assets/166076732/39a6cdb7-67e2-4fbd-8651-327b1a6d3578">


  
## Installation
  To use this application, you must install inquirer via npm. To run tests, the jest package must be installed.
    
## Usage
  This application can be used by clients to create simple custom SVG files for logos. The user can select the desired shape (circle, square or triangle) and can enter desired text characters as well as choose color for the text and logo shape (entered as a hex code or color keyword). This information will be exported as a .svg file using the file system package via node. The tests for this app are run through jest and are set up to test for accurate use of the user input in all shape cases. 

  link to screencastify video demo: 
    
## Credits
  N/A
## License
  [MIT](https://choosealicense.com/licenses/mit/)

