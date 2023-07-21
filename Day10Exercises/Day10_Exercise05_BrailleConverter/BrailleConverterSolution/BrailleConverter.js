brailleMap = {
  a: "⠁",
  b: "⠃",
  c: "⠉",
  d: "⠙",
  e: "⠑",
  f: "⠋",
  g: "⠛",
  h: "⠓",
  i: "⠊",
  j: "⠚",
  k: "⠅",
  l: "⠇",
  m: "⠍",
  n: "⠝",
  o: "⠕",
  p: "⠏",
  q: "⠟",
  r: "⠗",
  s: "⠎",
  t: "⠞",
  u: "⠥",
  v: "⠧",
  w: "⠺",
  x: "⠭",
  y: "⠽",
  z: "⠵",
  " ": "⠀",
};
let input = document.getElementsByTagName("input")[0];
input.addEventListener("input", convertToBraille, false);
function convertToBraille() {
  // document.getElementById("output").textContent = input.value.split("").map(letter => brailleMap[letter.toLowerCase()]).join("");
  let array = input.value.split("");
  for (let char of array) {
    console.log(char);
    char = brailleMap;
    console.log(brailleMap[array[0]]);
  }
}
