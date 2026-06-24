export function buildGrid(keyword) {
  const key = keyword.toUpperCase().replace(/J/g, "I");
  const seen = new Set();
  const grid = [];

  for (const char of key) {
    if (/[A-Z]/.test(char) && !seen.has(char)) {
      seen.add(char);
      grid.push(char);
    }
  }

  for (let i = 65; i <= 90; i++) {
    const char = String.fromCharCode(i);
    if (char === "J") {
      continue;
    }
    if (!seen.has(char)) {
      seen.add(char);
      grid.push(char);
    }
  }

  return grid;
}

function getPosition(grid, char) {
  const index = grid.indexOf(char === "J" ? "I" : char);

  return { row: Math.floor(index / 5), col: index % 5 };
}

function prepareText(text) {
  let clean = text
    .toUpperCase()
    .replace(/J/g, "I")
    .replace(/[^A-Z]/g, "");

  const pairs = [];
  let i = 0;

  while (i < clean.length) {
    const a = clean[i];
    const b = clean[i + 1];

    if (!b) {
      pairs.push([a, "X"]);
      i++;
    } else if (a === b) {
      pairs.push([a, "X"]);
      i++;
    } else {
      pairs.push([a, b]);
      i += 2;
    }
  }

  return pairs;
}

function encryptPair(grid, a, b) {
  const posA = getPosition(grid, a);
  const posB = getPosition(grid, b);

  if (posA.row === posB.row) {
    return [
      grid[posA.row * 5 + ((posA.col + 1) % 5)],
      grid[posB.row * 5 + ((posB.col + 1) % 5)],
    ];
  } else if (posA.col === posB.col) {
    return [
      grid[((posA.row + 1) % 5) * 5 + posA.col],
      grid[((posB.row + 1) % 5) * 5 + posB.col],
    ];
  } else {
    return [grid[posA.row * 5 + posB.col], grid[posB.row * 5 + posA.col]];
  }
}

function decryptPair(grid, a, b) {
  const posA = getPosition(grid, a);
  const posB = getPosition(grid, b);

  if (posA.row === posB.row) {
    return [
      grid[posA.row * 5 + ((posA.col + 4) % 5)],
      grid[posB.row * 5 + ((posB.col + 4) % 5)],
    ];
  } else if (posA.col === posB.col) {
    return [
      grid[((posA.row + 4) % 5) * 5 + posA.col],
      grid[((posB.row + 4) % 5) * 5 + posB.col],
    ];
  } else {
    return [grid[posA.row * 5 + posB.col], grid[posB.row * 5 + posA.col]];
  }
}

export function playfairEncrypt(text, keyword) {
  if (!keyword) {
    return text;
  }

  const grid = buildGrid(keyword);
  const pairs = prepareText(text);

  return pairs.map(([a, b]) => encryptPair(grid, a, b).join("")).join("");
}

export function playfairDecrypt(text, keyword) {
  if (!keyword) {
    return text;
  }

  const grid = buildGrid(keyword);
  const pairs = prepareText(text);

  return pairs.map(([a, b]) => decryptPair(grid, a, b).join("")).join("");
}
