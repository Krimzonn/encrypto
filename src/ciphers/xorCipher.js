export function xorEncrypt(text, key) {
  if (!key) {
    return text;
  }

  let result = "";

  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    const keyCode = key.charCodeAt(i % key.length);
    const xorCode = charCode ^ keyCode;

    if (xorCode >= 32 && xorCode <= 126) {
      result += String.fromCharCode(xorCode);
    } else {
      result += text[i];
    }
  }

  return result;
}

export function xorDecrypt(text, key) {
  return xorEncrypt(text, key);
}

export function buildXorMap(text, key) {
  if (!text || !key) {
    return [];
  }

  const result = [];

  for (let i = 0; i < Math.min(text.length, 15); i++) {
    const charCode = text.charCodeAt(i);
    const keyCode = key.charCodeAt(i % key.length);
    const xorCode = charCode ^ keyCode;

    const resultChar =
      xorCode >= 32 && xorCode <= 126 ? String.fromCharCode(xorCode) : "?";

    result.push({
      original: text[i],
      keyChar: key[i % key.length],

      originalBits: charCode.toString(2).padStart(8, "0"),
      keyBits: keyCode.toString(2).padStart(8, "0"),
      xorBits: xorCode.toString(2).padStart(8, "0"),
      result: resultChar,
    });
  }

  return result;
}
