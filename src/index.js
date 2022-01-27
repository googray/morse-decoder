const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let str = "";
  for (let j = 0; j < expr.length; j += 10) {
    if (typeof String.prototype.replaceAll === "undefined") {
      String.prototype.replaceAll = function (substr, repElem) {
        return this.replace(new RegExp(substr, "g"), () => repElem);
      };
    }
    let stR = expr
      .slice(j, j + 10)
      .replaceAll("00", "")
      .replaceAll("11", "-")
      .replaceAll("10", ".")
      .replace("**********", " ");
    str += `${stR} `;
  }
  return str
    .split("  ")
    .map((word) =>
      word
        .split(" ")
        .map((char) => MORSE_TABLE[char])
        .join("")
    )
    .join(" ")
    .trim();
}

module.exports = {
  decode,
};
