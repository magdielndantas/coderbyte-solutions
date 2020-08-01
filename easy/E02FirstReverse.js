/*
First Reverse
Have the function FirstReverse(str) take the str parameter
being passed and return the string in reversed order.
For example: if the input string is "Hello World and Coders"
then your program should return the string sredoC dna dlroW olleH.
*/

function FirstReverse(str) { 
  var strReverse = ''
  for(let i = 0; i < str.length; i++){
    strReverse += str[str.length - (i + 1)]
  }
  return strReverse; 

}
   
// keep this function call here 
console.log(FirstReverse(readline()));
