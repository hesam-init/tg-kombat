console.log(decodeCipher("RVR8IRVJFVU0="));
console.log(toMorseCode(decodeCipher("RVR8IRVJFVU0=")));

function decodeCipher(code) {
  const cipherCode = `${code.slice(0, 3)}${code.slice(4)}`;
  const decodedString = window.atob(cipherCode);

  return decodedString;
}

function toMorseCode(text) {
  const morseCodeMap = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    " ": "/",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "&": ".-...",
    ":": "---...",
    ";": "-.-.-.",
    "=": "-...-",
    "+": ".-.-.",
    "-": "-....-",
    _: "..--.-",
    '"': ".-..-.",
    $: "...-..-",
    "@": ".--.-.",
  };

  const morseCodeArray = Array.from(text.toUpperCase()).map(
    (char) => `${char} = ${morseCodeMap[char]}` || ""
  );

  return morseCodeArray.join("\n");
}
