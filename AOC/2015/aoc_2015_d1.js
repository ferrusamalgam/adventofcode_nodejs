//Questions 
//What floor does santa end up on?
// ) +1
// ( -1

const fs = require('fs');

// function q1() {
//     fs.readFile('./aoc_2015_d1.txt', (err, data) =>{
//         const directions = data.toString();
//         const darray = directions.split('');
//         const answer = darray.reduce((acc, x) => {
//             if (x === '(' ) {
//                 return acc += 1
//             } else if (x === ')' ) {
//                 return acc -= 1
//             }
//         }, 0)
//         console.log(answer)
//     })
// }

// q1()

function q11() {
    fs.readFile('./aoc_2015_d1.txt', (err, data) =>{
        console.time('funchallenge');
        if (err){
            console.log('error')
        }
        let fup = 0;
        let fdw = 0;
        let codeString = data.toString();
        for (i of codeString) {
            if (i === "(") {
                fup++;
            } else if (i === ")"){
                fdw++
            }
        }
        console.log(fup - fdw)
        console.timeEnd('funchallenge');
        // console.log(codeString)
    })
}

q11()