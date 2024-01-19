const unknown = "?";
const star = "*";

function match(pattern, message) {
  let result = true;
  let iMessage = 0,
    iPattern = 0;
  while (result) {
    if (iMessage >= message.length || iPattern >= pattern.length) {
      return result && iMessage >= message.length && iPattern >= pattern.length;
    }

    // if pattern is a star deleguate problem
    if (pattern[iPattern] === star) {
      [iMessage, iPattern, starResult] = matchStar(
        pattern,
        message,
        iMessage,
        iPattern
      );
      result = result && starResult;

      // If pattern isn't ? process it otherwise ignore it
    } else if (pattern[iPattern] !== unknown) {
      result = result && pattern[iPattern] === message[iMessage];
    }

    iMessage++;
    iPattern++;
  }

  return result;
}

function matchStar(pattern, message, iMessage, iPattern) {
  let iStarPattern = 1,
    iStarMessage = 0;
  while (true) {
    // All end conditions will be cheched at the begining

    // If we found the end of message end here
    if (iMessage + iStarMessage >= message.length) {
      // If pattern isn't completed return false
      return [
        iMessage + iStarMessage - 1,
        iPattern + iStarPattern - 1,
        iPattern + iStarPattern >= pattern.length,
      ];
    } else if (iPattern + iStarPattern >= pattern.length) {
      // If chars remains while pattern is finished go back, we could also use the undefined functionnality of javascript and avoid this condition as undefined would not be equal to current char without throw exception
      // We could also short cut by checking if previousPattern is a star and return directly
      iStarPattern = 1;

      // If we found a new star, end here
    } else if (pattern[iPattern + iStarPattern] === star) {
      let previousPattern = iPattern + iStarPattern - 1;
      return [
        iMessage + iStarMessage - 1,
        iPattern + iStarPattern - 1,
        iStarPattern > 1 || previousPattern === star,
      ];
    }

    // If the next pattern is matching the message, consider star valid for now
    if (
      pattern[iPattern + iStarPattern] === unknown ||
      pattern[iPattern + iStarPattern] === message[iMessage + iStarMessage]
    ) {
      // Check next pattern
      iStarPattern++;
    } else {
      // Go back
      iStarPattern = 1;
    }

    // Check next message char
    iStarMessage++;
  }
}

// Tests
let pattern = "*";
let message = "fdsfsdfd";
console.log(
  pattern,
  message,
  "computed :",
  match(pattern, message),
  "expected: ",
  true
);

pattern = "*dc";
message = "fdsfsdf";
console.log(
  pattern,
  message,
  "computed :",
  match(pattern, message),
  "expected: ",
  false
);

pattern = "*dc";
message = "fdsfsdfdc";
console.log(
  pattern,
  message,
  "computed :",
  match(pattern, message),
  "expected: ",
  true
);

pattern = "*dcdc*f";
message = "fdsfsdfdc";
console.log(
  pattern,
  message,
  "computed :",
  match(pattern, message),
  "expected: ",
  false
);

pattern = "*dcdc*f";
message = "fdsfsdfdcdcAAAf";
console.log(
  pattern,
  message,
  "computed :",
  match(pattern, message),
  "expected: ",
  true
);

pattern = "*dcdc*f";
message = "fdsfsdfdcdcf";
console.log(
  pattern,
  message,
  "computed :",
  match(pattern, message),
  "expected: ",
  true
);

pattern = "*dcdc*f";
message = "fdsfsdfdcdcAAAfd";
console.log(
  pattern,
  message,
  "computed :",
  match(pattern, message),
  "expected: ",
  false
);

pattern = "*dcdc*f";
message = "fdsfsdfdcdcfd";
console.log(
  pattern,
  message,
  "computed :",
  match(pattern, message),
  "expected: ",
  false
);

pattern = "ab*dc";
message = "abdcdcdcdcdc";
console.log(
  pattern,
  message,
  "computed :",
  match(pattern, message),
  "expected: ",
  true
);

pattern = "ab*?c";
message = "abdcdcdcdcdc";
console.log(
  pattern,
  message,
  "computed :",
  match(pattern, message),
  "expected: ",
  true
);

pattern = "ab?d";
message = "abtd";
console.log(
  pattern,
  message,
  "computed :",
  match(pattern, message),
  "expected: ",
  true
);

pattern = "ab?d";
message = "abd";
console.log(
  pattern,
  message,
  "computed :",
  match(pattern, message),
  "expected: ",
  false
);

pattern = "abc";
message = "abcd";
console.log(
  pattern,
  message,
  "computed :",
  match(pattern, message),
  "expected: ",
  false
);
