export const valid_a_values = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];

function modInverse(a) {
  for (let i = 1; i < 26; i++) {
    if ((a * i) % 26 === 1) {
      return i;
    }
  }

  return 1;
}

export function affineEncrypt(text, a, b) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      const x = code - 65;
      result += String.fromCharCode(((a * x + b) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      const x = code - 97;
      result += String.fromCharCode(((a * x + b) % 26) + 97);
    } else {
      result += text[i];
    }
  }

  return result;
}

export function affineDecrypt(text, a, b) {
  const aInv = modInverse(a);
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      const x = code - 65;
      result += String.fromCharCode(((aInv * (x - b + 26)) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      const x = code - 97;
      result += String.fromCharCode(((aInv * (x - b + 26)) % 26) + 97);
    } else {
      result += text[i];
    }
  }

  return result;
}

export function buildAffineMap(a, b) {
  return Array.from({ length: 26 }, (_, i) => ({
    original: String.fromCharCode(65 + i),
    encrypted: String.fromCharCode(((a * i + b) % 26) + 65),
  }));
}
