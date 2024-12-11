/**
 * Regex
 * 
 * Regular Expressions
 * 
 * [a-z] => matches lowercase letters
 * [A-Z] => matches uppercase letters
 * [^A-Z] => a non-uppercase letter
 * ^[a-z] => a non-lowercase letter
 * [0-9] => matches any digits
 * [^0-9] => a non-numerical character
 * \d => equivalent to [0-9]
 * \D => equivalent to [^0-9]
 * . => matches any single character except line terminators
 * [A-Za-z] => matches any letter, lowercase or uppercase
 * \w => matches any alphamumeric character [a-zA-Z0-9]
 * \W => special characters
 * \s => whitespace
 * \S => any character other than whitespace
 * 
 * $ => matches the end of an input
 * ^ => matches the beginning of an input
 */

const regex = /\S/

let myString = '     '


// regex.test(str) => returns true or false
console.log(regex.test(myString))

const regex2 = /[^Is$]/

myString = 'I sure do love to code'

if (myString.match(regex2)) {
    console.log('match')
} else {
    console.log('no match')
}