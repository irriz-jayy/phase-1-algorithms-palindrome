const word = ["racecar", "abba", "a", "ab", "robot"];

function isPalindrome(word) {
  var len = word.length;
  for (var i = 0; i < len; i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  create function isPalindrome with argument of word

  iterate through an array of word
  checks the length of the word and takes the last index and subtracts one and checks if they match with the new index
  then returns true
  if not retuurns false


/*
  The function checks the index of the word. Then takes the lenght of the word subtracts by obe and takes the index and subtracts it. If the letter that is there in the cuurent new index is strictly similar to the expected it passes true. If it isnt it passes false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
}

module.exports = isPalindrome;
