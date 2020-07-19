/*Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty.
*/

function LongestWord(sen) { 
  var senReplace = sen.replace(/[^\w\s-]/g, '');
  var senSplit = senReplace.split(' ')
  var logestWord = ""
  for (let i = 0; i < senSplit.length; i++) {
    if (senSplit[i].length > logestWord.length) {
      logestWord = senSplit[i]
    }
  }
  return logestWord; 
}
   
// keep this function call here 
console.log(LongestWord(readline()));
