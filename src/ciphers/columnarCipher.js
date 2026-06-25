function getSortedOrder(keyword) {
  const key = keyword.toUpperCase().replace(/[^A-Z]/g, "");

  return key
    .split("")
    .map((char, i) => ({ char, i }))
    .sort((a, b) => a.char.localeCompare(b.char))
    .map((item) => item.i);
}

export function columnarEncrypt(text, keyword) {
  if (!keyword) {
    return text;
  }

  const key = keyword.toUpperCase().replace(/[^A-Z]/g, "");
  const numCols = key.length;

  const padded =
    text + "X".repeat((numCols - (text.length % numCols)) % numCols);
  const numRows = Math.ceil(padded.length / numCols);

  const grid = [];
  for (let r = 0; r < numRows; r++) {
    grid.push(padded.slice(r * numCols, (r + 1) * numCols));
  }

  const order = getSortedOrder(keyword);
  let result = "";
  for (const col of order) {
    for (let r = 0; r < numRows; r++) {
      result += grid[r][col];
    }
  }

  return result;
}

export function columnarDecrypt(text, keyword) {
  if (!keyword) {
    return text;
  }

  const key = keyword.toUpperCase().replace(/[^A-Z]/g, "");
  const numCols = key.length;
  const numRows = Math.ceil(text.length / numCols);

  const order = getSortedOrder(keyword);
  const colLengths = Array(numCols).fill(numRows);

  const cols = {};
  let index = 0;

  for (const col of order) {
    cols[col] = text.slice(index, index + colLengths[col]);
    index += colLengths[col];
  }

  let result = "";
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      result += cols[c][r];
    }
  }

  return result;
}

export function buildColumnarGrid(text, keyword) {
  if (!text || !keyword) {
    return { grid: [], order: [], key: [] };
  }

  const key = keyword.toUpperCase().replace(/[^A-Z]/g, "");
  const numCols = key.length;
  const padded =
    text + "X".repeat((numCols - (text.length % numCols)) % numCols);
  const numRows = Math.ceil(padded.length / numCols);

  const grid = [];
  for (let r = 0; r < numRows; r++) {
    grid.push(padded.slice(r * numCols, (r + 1) * numCols).split(""));
  }

  const order = getSortedOrder(keyword);

  return { grid, order, key: key.split("") };
}
