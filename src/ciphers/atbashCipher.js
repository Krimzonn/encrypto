function atbashEncrypt(text) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(155 - code);
    } else if (code >= 97 && code <= 122) {
      result += String.fromCharCode(219 - code);
    } else {
      result += text[i];
    }
  }

  return result;
}

export function atbashDecrypt(text) {
  return atbashEncrypt(text);
}

export function buildAtbashMap() {
  return Array.from({ length: 26 }, (_, i) => ({
    original: String.fromCharCode(65 + i),
    shifted: String.fromCharCode(90 - i),
  }));
}

export default atbashEncrypt;
