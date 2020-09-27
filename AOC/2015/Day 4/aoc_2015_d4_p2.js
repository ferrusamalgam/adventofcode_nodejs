// --- Part Two ---

// Now find one that starts with six zeroes.

// Your puzzle input is still bgvyzdsv.
const fs = require('fs');
const crypto = require('crypto');
const md5 = (data) => crypto.createHash('md5').update(data).digest('hex');
const file = fs.readFileSync('./aoc_2015_d4.txt', 'utf-8')
const isStartsWithSixZeros = data => data.slice(0,6) === '000000';

let counter = 0;
while (!isStartsWithSixZeros(md5(`${file}${counter}`))) counter++;

console.log(counter);