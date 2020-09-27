// --- Part Two ---

// The next year, to speed up the process, Santa creates a robot version of himself, Robo-Santa, to deliver presents with him.

// Santa and Robo-Santa start at the same location (delivering two presents to the same starting house), then take turns moving based on instructions from the elf, who is eggnoggedly reading from the same script as the previous year.

// This year, how many houses receive at least one present?

// For example:

//     ^v delivers presents to 3 houses, because Santa goes north, and then Robo-Santa goes south.
//     ^>v< now delivers presents to 3 houses, and Santa and Robo-Santa end up back where they started.
//     ^v^v^v^v^v now delivers presents to 11 houses, with Santa going one direction and Robo-Santa going the other.

const fs = require('fs');

const file = fs.readFileSync('./aoc_2015_d3.txt', 'utf-8').split('');
// const file = '^v'.split('')
let real_santa = []
let fake_santa = []

for (let i=0; i<file.length; i++){
    if ( i % 2 === 0){
        real_santa.push(file[i])
    } else fake_santa.push(file[i])
}

// console.log(fake_santa)



function abc(visit){
let visited = ['0x0'];
let position = {x:0 , y:0};
for (let i=0; i<visit.length; i++) {
    if (visit[i] === '<'){
        position.x--;
    } else if (visit[i]  === '>') {
        position.x++;
    } else if (visit[i]  === '^') {
        position.y++
    } else if (visit[i]  === 'v') {
        position.y--;
    }
    visited.push(`${position.x}x${position.y}`)
}
return visited;
}

const result = new Set(abc(real_santa).concat(abc(fake_santa))).size
// const result = new Set(abc(real_santa))
const result_fake = new Set(abc(real_santa))

console.log(result)
// console.log(result_fake)
