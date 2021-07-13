// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  
    function polybius(input, encode = true) {
      // your solution code here
      const alphabet = {
      "a":"11", "b":"21", "c":"31", "d":"41", "e":"51",
      "f":"12", "g":"22", "h":"32","(i/j)":"42", "k":"52",
      "l":"13", "m":"23", "n":"33", "o":"43", "p":"53",
      "q":"14", "r":"24", "s":"34", "t":"44", "u":"54",
      "v":"15", "w":"25", "x":"35", "y":"45", "z":"55"
    }
      let polybiusSquare = [
        ["a", "b", "c", "d", "e"],
        ["f", "g", "h", "(i/j)", "k"],
        ["l", "m", "n", "o", "p"],
        ["q", "r", "s", "t", "u"],
        ["v", "w", "x", "y", "z", " "],
      ];
    const letters = Object.keys(alphabet)
    const numbers = Object.values(alphabet)
  
    let lowerCaseInput = input.toLowerCase()
  
    let finalMessage;
  
        if (encode) {
          let inputArray = input.split("");
          let inputArrayReplaced = inputArray.map((string) => {
              let lowerCase = string.toLowerCase();
              if (lowerCase === "i" || lowerCase === "j") {
                return "(i/j)";
              }
              return lowerCase;
        });
          
        let xCordinate = [];
        let yCordinate = inputArrayReplaced.map((letter) => {
          for (let i = 0; i < letters.length; i++) {
            const row = polybiusSquare[i];
            if (row.find((alpha) => alpha === letter)) {
              // adds x-coordinate when "row" meets condition. "+1" corrects for x/y axis given in prompt
              xCordinate.push(i + 1);
              // adds Y-coordinate.  "+1" corrects for x/y axis given in prompt
              return row.indexOf(letter) + 1;
            }
          }
        });
         finalMessage = xCordinate.reduce((acc, xValue, index) => {
          let pair = `${yCordinate[index]}${xValue}`;
          // converts numeric representation of a space back to " ".
          if (pair === "65") {
            pair = " ";
          }
          acc.push(pair);
          return acc;
        }, []);
          
        } else {
          //65 is the code for space
          let spacesAdded = input.replace(" ", 65)
          //checks that there are an even number of characters so that all coordinate pairs are kept together
          if(spacesAdded.length % 2 !== 0) return false
          let coordinates = spacesAdded.match(/..?/g)
          finalMessage = coordinates.map((yx) => {
            let rowIndex = yx.split("")[1] - 1
            let columnIndex = yx.split("")[0] - 1
            return polybiusSquare[rowIndex][columnIndex]
          })
          
        }
      return finalMessage.join("");
    }
  
    return {
      polybius,
    };
  })();

module.exports = { polybius: polybiusModule.polybius };
