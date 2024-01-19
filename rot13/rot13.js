const alph = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const reverseAlph = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
  I: 8,
  J: 9,
  K: 10,
  L: 11,
  M: 12,
  N: 13,
  O: 14,
  P: 15,
  Q: 16,
  R: 17,
  S: 18,
  T: 19,
  U: 20,
  V: 21,
  W: 22,
  X: 23,
  Y: 24,
  Z: 25,
};

function hackRot13(string) {
  return hackCesar(string, 13);
}

function hackCesar(string, rotation) {
  let res = "";
  for (let i = 0; i < string.length; i++) {
    const element = string.charAt(i);
    let index = reverseAlph[element];
    if (index != undefined) {
      let newIndex = (index + rotation) % alph.length;
      res += alph[newIndex];
    } else {
      res += element;
    }
  }
  return res;
}

console.log(
  "URYYB JBEYQ",
  hackRot13("URYYB JBEYQ"),
  hackRot13("URYYB JBEYQ") === "HELLO WORLD",
  "HELLO WORLD"
);
console.log(
  "BCRAPYNFFEBBZF",
  hackRot13("BCRAPYNFFEBBZF"),
  hackRot13("BCRAPYNFFEBBZF") === "OPENCLASSROOMS",
  "OPENCLASSROOMS"
);
console.log(
  "PRPV RFG ZBA PBQR FRPERG",
  hackRot13("PRPV RFG ZBA PBQR FRPERG"),
  hackRot13("PRPV RFG ZBA PBQR FRPERG") === "CECI EST MON CODE SECRET",
  "CECI EST MON CODE SECRET"
);
