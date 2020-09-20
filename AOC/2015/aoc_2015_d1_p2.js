// --- Part Two ---

// Now, given the same instructions, find the position of the first character that 
// causes him to enter the basement (floor -1). The first character in the instructions has 
// position 1, the second character has position 2, and so on.

// For example:

//     ) causes him to enter the basement at character position 1.
//     ()()) causes him to enter the basement at character position 5.

// What is the position of the character that causes Santa to first enter the basement?

const fs = require('fs')
let total = 0;
let position = 0;

const file = fs.readFileSync('./aoc_2015_d1.txt').toString();
const darry = file.split('');
// console.log(darry)
for(i of darry) {
    if (i === '(') {
        total++;
        position++;

    } else if (i === ')'){
        total++;
        position--;
        }
    if (position === -1){
        console.log(position)
        break; 
    }

    }

console.log(total)

