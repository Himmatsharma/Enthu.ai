/* prototype */

// /* with function */
// String.prototype.yell = function() {
// 	return this.toUpperCase();
// };

// /* with array */
// Array.prototype.pop = function() {
// 	return 'hello this is array';
// };


/* factory functons */
// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     color.hex = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     return color;
// }

// const firstColor = makeColor(35, 255, 150);
// firstColor.hex(); 
// firstColor.rgb(); 

// const black = makeColor(0, 0, 0);
// black.rgb(); 
// black.hex(); 


/* this is constructor */

// function Color(r,g,b){
//     console.log('hello');
//     this.r;
//     this.g;
//     this.b;
//     console.log(this);
// }


// Color.prototype.rgb = function() {
// 	const { r, g, b } = this;
// 	return `rgb(${r}, ${g}, ${b})`;
// };

// const color1 = new Color(40, 255, 60);
// color1.rgb();


/* class */
// class Color {
//     constructor(r, g, b, name) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//     }

//     innerRGB() {
//         const { r, g, b } = this;
//         return `${r}, ${g}, ${b}`;
//     }

//     rgb() {
//         return `rgb(${this.innerRGB()})`;
//     }
    
// }

// const red   = new Color(255, 67, 89, 'himmat');
// const white = new Color(255, 255, 255, 'kumar');