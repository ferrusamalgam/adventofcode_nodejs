// --- Part Two ---

// The elves are also running low on ribbon. Ribbon is all the same width, so they only have to worry about the length they need to order, which they would again like to be exact.

// The ribbon required to wrap a present is the shortest distance around its sides, or the smallest perimeter of any one face. Each present also requires a bow made out of ribbon as well; the feet of ribbon required for the perfect bow is equal to the cubic feet of volume of the present. Don't ask how they tie the bow, though; they'll never tell.

// For example:

//     A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon to wrap the present plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34 feet.
//     A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon to wrap the present plus 1*1*10 = 10 feet of ribbon for the bow, for a total of 14 feet.

// How many total feet of ribbon should they order?

const fs = require('fs');

const file = fs.readFileSync('./aoc_2015_d2.txt').toString().split('\n');
let total_rib = 0;
function ribbon(l, w, h) {
    side1 = 2*l + 2*w;
    side2 = 2*w + 2*h;
    side3 = 2*l + 2*h;
    volume = l*w*h;
    perimeter = side1;

    if (side1 < side2) {
        if (side1 < side3) {
            perimeter = side1;
        } else perimeter = side3;
    } else if (side2 < side3) {
        perimeter = side2;
     } else perimeter = side3;
     
return volume + perimeter;

}

for (let i=0; i<file.length; i++) {
    let dim = file[i].split('x');
    let dims = ribbon(Number(dim[0]), Number(dim[1]), Number(dim[2])) 
    total_rib += dims;
};

console.log(total_rib);