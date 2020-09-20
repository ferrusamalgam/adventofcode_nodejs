// --- Day 2: I Was Told There Would Be No Math ---

// The elves are running low on wrapping paper, and so they need to submit an order for more. They have a list of the dimensions (length l, width w, and height h) of each present, and only want to order exactly as much as they need.

// Fortunately, every present is a box (a perfect right rectangular prism), which makes calculating the required wrapping paper for each gift a little easier: find the surface area of the box, which is 2*l*w + 2*w*h + 2*h*l. The elves also need a little extra paper for each present: the area of the smallest side.

// For example:

//     A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper plus 6 square feet of slack, for a total of 58 square feet.
//     A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 square feet of wrapping paper plus 1 square foot of slack, for a total of 43 square feet.

// All numbers in the elves' list are in feet. How many total square feet of wrapping paper should they order?


const fs = require('fs');

const file = fs.readFileSync('./aoc_2015_d2.txt').toString().split('\n');
// console.log(file);

function area(l, w, h) {
    let side1 = l * w;
    let side2 = w * h;
    let side3 = h * l;
    let extra = side1;
    let surfacearea = 2*l*w + 2*w*h + 2*h*l;
    if (side1 < side2) {
        if (side1 < side3 ) {
            extra = side1;
        }else extra = side3
    } 
    else if (side2 < side3) {
        extra = side2;
    } else extra = side3;

    return surfacearea + extra
}

let total_wrap = 0;
for (let i=0; i < file.length; i++) {
    let dims = file[i].split('x')
    total_wrap += area(Number(dims[0]), Number(dims[1]), Number(dims[2]))

    
}

console.log(total_wrap)
