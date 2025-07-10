let str = "JavaScript";
let count = 0;
let vowels = "aeiouAEIOU";

for(let i = 0; i < str.length; i++) {
  if(vowels.includes(str[i])) {
    count++;
  }
}

console.log("Vowel Count:", count); // Output: 3

//
let word = "madam";
let reversed = word.split("").reverse().join("");

if(word === reversed) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + " is not a palindrome");
}

//
let sentence = "hello world from js";
let words = sentence.split(" ");

for(let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

let result = words.join(" ");
console.log(result); // Output: "Hello World From Js"

//
let numbers = [10, 20, 30, 40];
let sum = 0;

for(let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Sum:", sum); // Output: 100

//
let nums = [45, 67, 12, 89, 34];
let max = nums[0];

for(let i = 1; i < nums.length; i++) {
  if(nums[i] > max) {
    max = nums[i];
  }
}

console.log("Largest Number:", max); // Output: 89

//
let arr = [1, 2, 3, 4, 5];
let reversed = arr.reverse();

console.log("Reversed Array:", reversed); // Output: [5, 4, 3, 2, 1]