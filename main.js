"use strict";

const { idText } = require("typescript");

let fruits = ["apple", "mango", "avocado", "kiwi"];

function replaceWord(...word) {
  word.splice(-2, 1, "strawberry");
  return word;
}

let showResult = replaceWord("apple", "mango", "avocado", "kiwi");
console.log(showResult);

//2

//! must be improved
let info = "good day";

function getWord(word) {
  let tempWord = word.slice(4);
  return tempWord;
}

let result = getWord(info);

console.log(result);

//3

let Word = "Hello World";

function getWordLength(word) {
  let result = word.replace(" ", "");
  return result.length;
}

let result2 = getWordLength(Word);

console.log(result2);

//4

let numbers = [5, 25, 89, 120, 36];

numbers.push("javascript", "python");

console.log(numbers);

numbers.unshift("html ", "css");

console.log(numbers);

console.log(numbers.length);

numbers.pop();

numbers.shift();

console.log(numbers);

//5
let array = ["orange", "banana", "kiwi"];
console.log(array.length);

array.push("apple", "pineapple");
console.log(array);

array.unshift("watermelon");
console.log(array);

console.log(array.length);

array.splice(3, 0, "mango");
console.log(array);

array.pop();
array.shift();
console.log(array);

console.log(array.length);

//6
let array3 = [1, 2, 3, 4, 5];

array3.splice(3, 0, "a", "b", "c");

console.log(array3);

//7

let array7 = [15, 100, 25, 10, 36];

array7.splice(3, 1);
console.log(array7);

//8

let array8 = [1, 2, 3, 4, 5];

array8.splice(2, 1, "three");
console.log(array8);

//9
let array2 = [14, 150, "css", null, "javascript", 25];
let strings = [];

let answer = array2.map(function (item) {
  if (typeof item == "string") {
    strings.push(item.toUpperCase());
  }
  return item ** 2;
});

console.log(strings);
console.log(answer);

//10

let array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let divideBy3 = array5.map(function (item) {
  return item / 3;
});

console.log(divideBy3);
