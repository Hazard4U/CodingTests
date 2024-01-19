// Units
const units = [1000, 500, 100, 50, 10, 5, 1];
const symbols = ["M", "D", "C", "L", "X", "V", "I"];
// Match the unit index used as substraction (IV, IX, XL, XC, CD, CM), except for 'I' which has 0 (1000) to make the algo works
const substractUnitIndex = [2, 2, 4, 4, 6, 6, 0];

function parseToRoman(number) {
  let result = "";

  // Go through each symbol
  for (let i = 0; i < units.length; i++) {
    // Times this symbol is used
    let times = Math.floor(number / units[i]);

    // Special case with substraction (CM, XC, IX)
    if (times === 0) {
      // Increase number with possible substraction
      let tryRounding = units[substractUnitIndex[i]] + number;
      
      // If rounding success
      if (Math.floor(tryRounding / units[i]) === 1) {
        // Update times
        times = 1;
        // Set
        number = tryRounding - units[i];
        // Concatenate the substraction
        result += symbols[substractUnitIndex[i]];
      }
    } else {
      // Remove this amount of time
      number -= times * units[i];
    }

    // Special case, a symbol repeated 4 times cannot exists (CD, XL, IV)
    if (times === 4 && i !== 0) {
      result += symbols[i] + symbols[i - 1];
      times = 0;
    }

    // Repeat current symbol if used
    for (let j = 0; j < times; j++) {
      result += symbols[i];
    }
  }

  return result;
}

// Tests
console.log(parseToRoman(4), parseToRoman(4) === "IV", "IV");
console.log(parseToRoman(9), parseToRoman(9) === "IX", "IX");
console.log(parseToRoman(10), parseToRoman(10) === "X", "X");
console.log(parseToRoman(37), parseToRoman(37) === "XXXVII", "XXXVII");
console.log(parseToRoman(49), parseToRoman(49) === "XLIX", "XLIX");
console.log(parseToRoman(99), parseToRoman(99) === "XCIX", "XCIX");
console.log(parseToRoman(143), parseToRoman(143) === "CXLIII", "CXLIII");
console.log(parseToRoman(1234), parseToRoman(1234) === "MCCXXXIV", "MCCXXXIV");
console.log(
  parseToRoman(4234),
  parseToRoman(4234) === "MMMMCCXXXIV",
  "MMMMCCXXXIV"
);
