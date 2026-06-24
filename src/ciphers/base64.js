export function base64Encode(text) {
  try {
    return btoa(text);
  } catch {
    return btoa(unescape(encodeURIComponent(text)));
  }
}

export function base64Decode(text) {
  try {
    return atob(text);
  } catch {
    return "Invalid Base64 string";
  }
}

export function buildBase64Map(text) {
  if (!text) {
    return [];
  }

  const result = [];

  for (let i = 0; i < Math.min(text.length, 12); i += 3) {
    const chunk = text.slice(i, i + 3);
    const encoded = btoa(chunk.padEnd(3, "\0")).slice(
      0,
      Math.ceil((chunk.length * 4) / 3),
    );
    result.push({
      original: chunk,
      encoded,
    });
  }

  return result;
}
