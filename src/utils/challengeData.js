import caesarEncrypt from "../ciphers/caesarCipher";
import atbashEncrypt from "../ciphers/atbashCipher";
import { vigenereEncrypt } from "../ciphers/vigenereCipher";
import { railFenceEncrypt } from "../ciphers/railFenceCipher";
import { base64Encode } from "../ciphers/base64";

const raw_challenges = [
  {
    plaintext: "THE QUICK BROWN FOX",
    cipher: "Caesar",
    key: 3,
    hint: "Each letter is shifted by a number",
  },
  {
    plaintext: "HELLO WORLD",
    cipher: "Caesar",
    key: 7,
    hint: "Each letter is shifted by a number",
  },
  {
    plaintext: "SECRET MESSAGE",
    cipher: "Caesar",
    key: 13,
    hint: "Each letter is shifted by a number",
  },
  {
    plaintext: "CRYPTOGRAPHY IS FUN",
    cipher: "Atbash",
    key: null,
    hint: "The alphabet is mirrored",
  },
  {
    plaintext: "HIDE AND SEEK",
    cipher: "Atbash",
    key: null,
    hint: "A becomes Z and Z becomes A",
  },
  {
    plaintext: "KNOWLEDGE IS POWER",
    cipher: "Vigenère",
    key: "KEY",
    hint: "A keyword shifts each letter differently",
  },
  {
    plaintext: "ATTACK AT DAWN",
    cipher: "Vigenère",
    key: "LEMON",
    hint: "A keyword shifts each letter differently",
  },
  {
    plaintext: "DEFEND THE CASTLE",
    cipher: "Rail Fence",
    key: 3,
    hint: "Text is written in a zigzag pattern",
  },
  {
    plaintext: "MEET ME AT MIDNIGHT",
    cipher: "Rail Fence",
    key: 2,
    hint: "Text is written in a zigzag pattern",
  },
  {
    plaintext: "ENCRYPT EVERYTHING",
    cipher: "Base64",
    key: null,
    hint: "Binary data encoded as ASCII text",
  },
  {
    plaintext: "SECURITY FIRST",
    cipher: "Base64",
    key: null,
    hint: "Commonly seen in JWT tokens and APIs",
  },
  {
    plaintext: "BREAK THE CODE",
    cipher: "Caesar",
    key: 19,
    hint: "Each letter is shifted by a number",
  },
  {
    plaintext: "THE PASSWORD IS WRONG",
    cipher: "Atbash",
    key: null,
    hint: "The alphabet is mirrored",
  },
  {
    plaintext: "NEVER GIVE UP",
    cipher: "Vigenère",
    key: "CODE",
    hint: "A keyword shifts each letter differently",
  },
  {
    plaintext: "STAY CURIOUS",
    cipher: "Rail Fence",
    key: 3,
    hint: "Text is written in a zigzag pattern",
  },
];

function buildRawChallenges() {
  return raw_challenges.map((c) => {
    let ciphertext = "";

    if (c.cipher === "Caesar") {
      ciphertext = caesarEncrypt(c.plaintext, c.key);
    }
    if (c.cipher === "Atbash") {
      ciphertext = atbashEncrypt(c.plaintext);
    }
    if (c.cipher === "Vigenère") {
      ciphertext = vigenereEncrypt(c.plaintext, c.key);
    }
    if (c.cipher === "Rail Fence") {
      ciphertext = railFenceEncrypt(c.plaintext, c.key);
    }
    if (c.cipher === "Base64") {
      ciphertext = base64Encode(c.plaintext);
    }

    return {
      ciphertext,
      answer: c.plaintext,
      cipher: c.cipher,
      key: c.key,
      hint: c.hint,
    };
  });
}

export const challenges = buildRawChallenges();

export function hashDate(dateString) {
  let hash = 0;

  for (let i = 0; i < dateString.length; i++) {
    hash = (hash << 5) - hash + dateString.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}

export function getTodaysChallenge() {
  const today = new Date().toDateString();
  const index = hashDate(today) % challenges.length;

  return { ...challenges[index], date: today };
}
