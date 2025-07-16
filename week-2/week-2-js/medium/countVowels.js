/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let s=str.toLowerCase();
   let count=0;
   for(let el of s){
    if(el == 'a' || el == 'e' || el == 'i' || el == 'o' || el == 'u'){
      count++
    }
   }
   return count;
}

module.exports = countVowels;