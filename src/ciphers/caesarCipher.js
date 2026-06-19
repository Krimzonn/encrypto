export default function caesarEncrypt(text, shift) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      const shifted = ((code - 65 + shift) % 26) + 65;
      result += String.fromCharCode(shifted);
    } else if (code >= 97 && code <= 122) {
      const shifted = ((code - 97 + shift) % 26) + 97;
      result += String.fromCharCode(shifted);
    } else {
      result += text[i];
    }
  }

  return result;
}

export function caesarDecrypt(text, shift) {
  return caesarEncrypt(text, 26 - shift);
}

export function bruteForce(text) {
  const result = [];

  for (let shift = 1; shift <= 25; shift++) {
    result.push({ shift, text: caesarDecrypt(text, shift) });
  }

  return result;
}

export function buildAlphabetMap(shift) {
  return Array.from({ length: 26 }, (_, i) => ({
    original: String.fromCharCode(65 + i),
    shifted: String.fromCharCode(((i + shift) % 26) + 65),
  }));
}
