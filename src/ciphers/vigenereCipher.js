function getKeyShift(keyChar) {
  return keyChar.toUpperCase().charCodeAt(0) - 65;
}

function cleanKeyWord(keyWord) {
  return keyWord.replace(/[^a-zA-Z]/g, "").toUpperCase();
}

export function vigenereEncrypt(text, keyWord) {
  const key = cleanKeyWord(keyWord);

  if (!key) {
    return text;
  }

  let result = "";
  let keyIndex = 0;

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      const keyShift = getKeyShift(key[keyIndex % key.length]);
      const shifted = ((code - 65 + keyShift) % 26) + 65;
      result += String.fromCharCode(shifted);
      keyIndex++;
    } else if (code >= 97 && code <= 122) {
      const keyShift = getKeyShift(key[keyIndex % key.length]);
      const shifted = ((code - 97 + keyShift) % 26) + 97;
      result += String.fromCharCode(shifted);
      keyIndex++;
    } else {
      result += text[i];
    }
  }

  return result;
}

export function vigenereDecrypt(text, keyWord) {
  const key = cleanKeyWord(keyWord);

  if (!key) {
    return text;
  }

  let result = "";
  let keyIndex = 0;

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      const keyShift = getKeyShift(key[keyIndex % key.length]);
      const shifted = ((code - 65 - keyShift + 26) % 26) + 65;
      result += String.fromCharCode(shifted);
      keyIndex++;
    } else if (code >= 97 && code <= 122) {
      const keyShift = getKeyShift(key[keyIndex % key.length]);
      const shifted = ((code - 97 - keyShift + 26) % 26) + 97;
      result += String.fromCharCode(shifted);
      keyIndex++;
    } else {
      result += text[i];
    }
  }

  return result;
}

export function buildVigenereMap(text, keyWord, mode = "Encrypt") {
  const key = cleanKeyWord(keyWord);

  if (!key || !text) {
    return [];
  }

  const result = [];
  let keyIndex = 0;

  for (let i = 0; i < Math.min(text.length, 20); i++) {
    const code = text.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      const keyLetter = key[keyIndex % key.length];
      const keyShift = getKeyShift(keyLetter);
      const shifted =
        mode === "Encrypt"
          ? String.fromCharCode(((code - 65 + keyShift) % 26) + 65)
          : String.fromCharCode(((code - 65 - keyShift + 26) % 26) + 65);
      result.push({ original: text[i], keyLetter, shifted });
      keyIndex++;
    } else if (code >= 97 && code <= 122) {
      const keyLetter = key[keyIndex % key.length];
      const keyShift = getKeyShift(keyLetter);
      const shifted =
        mode === "Encrypt"
          ? String.fromCharCode(((code - 97 + keyShift) % 26) + 97)
          : String.fromCharCode(((code - 97 - keyShift + 26) % 26) + 97);
      result.push({ original: text[i], keyLetter, shifted });
      keyIndex++;
    } else {
      result.push({ original: text[i], keyLetter: "-", shifted: text[i] });
    }
  }

  return result;
}
