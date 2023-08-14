// Write a function called constructNote, which accepts two strings, a message and some letters. 
// The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

// function constructNote(msg, letters) {
//     let msgArr = msg.toLowerCase().split('');
//     const lettersArr = letters.toLowerCase().split('');
//     let msgFreq = {};
//     let lettersFreq = {};
  
//     for (let i = 0; i < msgArr.length; i++) {
//       msgFreq[msgArr[i]] = (msgFreq[msgArr[i]] + 1) || 1
//     }
  
//     for (let j = 0; j < lettersArr.length; j++) {
//       lettersFreq[lettersArr[j]] = (lettersFreq[lettersArr[j]] + 1) || 1
//     }
  
  
//     for (let el in msgFreq) {
//       if (!lettersFreq[el]) {
//         return false;
//       }
  
//       if (msgFreq[el] > lettersFreq[el]) {
//         return false;
//       }
//     }
//         return true
  
//   }


// REFACTORED
function constructNote(msg, letters) {
let msgFreq = {};
let lettersFreq = {};

for (el of msg) {
    msgFreq[el] = (msgFreq[el] + 1) || 1
}

for (el of letters) {
    lettersFreq[el] = (lettersFreq[el] + 1) || 1
}


for (let el in msgFreq) {
    if (!lettersFreq[el]) {
    return false;
    }

    if (msgFreq[el] > lettersFreq[el]) {
    return false;
    }
}
return true
}

console.log(constructNote('Cookie', 'cokiiie')) // false
console.log(constructNote('sky', 'sssyk')) // true
