const word = ["racecar", "abba", "a", "ab", "robot"];

function isPalindrome(word) {
  var len = word.length;
  for (var i = 0; i < len / 2; i++) {
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
  returns true if word is a palindrome
  return false if word is not a palindrome
  push onto result
  return results.


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
