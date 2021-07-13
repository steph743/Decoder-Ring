// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  
  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift > 25 || shift < -25) return false
    
    let lowerCaseInput = input.toLowerCase()
    
    if(encode){
      let encryptedMessage = ""
      for (let i = 0; i < lowerCaseInput.length; i++){
        let letterValue = lowerCaseInput[i]
        let letterCheck = alphabet.includes(letterValue)
        if(!letterCheck){
          encryptedMessage += letterValue
          continue
        }
        let currentLetter = alphabet.indexOf(letterValue)
        let shiftedLetter = currentLetter + shift
        if (shiftedLetter > 25){
          shiftedLetter -= 26
        }
        if (shiftedLetter < 0){
          shiftedLetter += 26
        }
        encryptedMessage += alphabet[shiftedLetter]
      }
      return encryptedMessage
    }

    if (!encode){
      let decryptedMessage = ""
      for (let i = 0; i < lowerCaseInput.length; i++){
        let letterValue = lowerCaseInput[i]
        let letterCheck = alphabet.includes(letterValue)
        if(!letterCheck){
          decryptedMessage += letterValue
          continue
        }
        let currentLetter = alphabet.indexOf(letterValue)
        let shiftedLetter = currentLetter - shift
        if (shiftedLetter > 25){
          shiftedLetter -= 26
        }
        if (shiftedLetter < 0){
          shiftedLetter += 26
        }
        decryptedMessage += alphabet[shiftedLetter]
      }
      return decryptedMessage
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
