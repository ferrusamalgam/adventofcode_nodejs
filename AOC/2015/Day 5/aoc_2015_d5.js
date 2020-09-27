// --- Day 5: Doesn't He Have Intern-Elves For This? ---

// Santa needs help figuring out which strings in his text file are naughty or nice.

// A nice string is one with all of the following properties:

//     It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
//     It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
//     It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.

// For example:

//     ugknbfddgicrmopn is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings.
//     aaa is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.
//     jchzalrnumimnmhp is naughty because it has no double letter.
//     haegwjzuvuyypxyu is naughty because it contains the string xy.
//     dvszwmarrgswjxmb is naughty because it contains only one vowel.

// How many strings are nice?


const fs = require('fs');

const files = fs.readFileSync('./aoc_2015_d5.txt', 'utf-8').split('\n');
const vowels = ['a','e','i','o','u'];
const badstrings = ['ab', 'cd', 'pq', 'xy'];


function isVowel(str) {
    const strchar = str.split('');
    let vowelCount = 0;
    let naughtyStrings = false;
    let hasTwoInARow = false;

    let lastChar = null;

        for (let i=0; i<strchar.length; i++) {
            let currChar = strchar[i];
            if (vowels.includes(currChar)) {
                vowelCount++
            }
            if (currChar === lastChar) {
                hasTwoInARow = true;
            }
            
            if (badstrings.includes(lastChar + currChar)){
                naughtyStrings = true
                break
            }
            lastChar = currChar
        }  
    return (vowelCount >= 3) && hasTwoInARow && !naughtyStrings
    };

// console.log(isVowel(files));
let f = 0
let t = 0
for (i in files) {
  
   const abc = isVowel(files[i])
   if (abc === true) t++
   if (abc === false) f++

}
console.log({t, f})


