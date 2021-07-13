// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    if (!alphabet || alphabet.length !== 26) return false
    
    for (let firstLetter in alphabet){
      for(let matchingLetter in alphabet){
        if (alphabet[firstLetter] === alphabet[matchingLetter] && firstLetter != matchingLetter) {
          return false
        }
      }
    }

    //find out the alphabet index number of each input character 
    //replace it with the letter at that index number in the substitution alphabet
    //letterCheck to maintain spaces

    let lowerCaseInput = input.toLowerCase()

    let finalMessage = ""
    for (let i = 0; i < lowerCaseInput.length; i++){
      let letterValue = lowerCaseInput[i]
      let letterCheck = alphabet.includes(letterValue)
      if(!letterCheck){
        finalMessage += letterValue 
      } else if (encode){
        let currentLetter = alpha.indexOf(letterValue)
        let cipheredLetter = alphabet[currentLetter]
        finalMessage += cipheredLetter
      } else {
        let currentLetter = alphabet.indexOf(letterValue)
        let decipheredLetter = alpha[currentLetter]
        finalMessage += decipheredLetter
      }
    }
    return finalMessage
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
