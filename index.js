/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

let area = function (l1, l2) {
  let areaOfRectangle = l1 * l2;
};

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

let crazySum = function (number1, number2) {
  let results = number1 + number2;
  if (number1 === number2) {
    return results * 3;
  } else {
    return results;
  }
};

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

let crazyDiff = function (givenNumber) {
  let absoluteDifference = Math.abs(givenNumber - 19);
  if (givenNumber > 19) {
    return absoluteDifference * 3;
  }
  return absoluteDifference;
};
console.log(crazyDiff(40));
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

let boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  }
  return false;
};

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

let strivify = function (anyString) {
  let frontWord = "Strive";
  let addedString = frontWord + " " + anyString;
  if (anyString.indexOf("Strive")) {
    return anyString;
  }
  return anyString;
};

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

let check3and7 = function (positiveNumber) {
  if (positiveNumber % 3 === 0) return positiveNumber + " is a multiple of 3 ";
  else if (positiveNumber % 7 === 0) {
    return positiveNumber + " is a multiple of 7 ";
  }
  return false;
};
console.log(check3and7(1));

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
let reverseString = function(givenString){
  return givenString.split("").reverse().join("");
}

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
let upperFirst = function(sentence){
  let words= sentence.split(" ");
  for(let i = 0; i<words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}
console.log(upperFirst("my name is samuel"))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

let cutString = function(){

}

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

let giveMeRandom = function(n){
  let nArray = []
  for(let x= 1; x<10; x++){
    let randomNumbers = Math.floor(Math.random()* x)
    nArray.push(randomNumbers); 
  }
  return nArray;
  
} 
console.log(giveMeRandom(10));