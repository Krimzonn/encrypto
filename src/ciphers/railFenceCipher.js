export function railFenceEncrypt(text, numRails) {
  if (numRails < 2) {
    return text;
  }

  const rails = Array.from({ length: numRails }, () => "");

  let currentRail = 0;
  let goingDown = true;

  for (let i = 0; i < text.length; i++) {
    rails[currentRail] += text[i];

    if (currentRail === numRails - 1) {
      goingDown = false;
    }

    if (currentRail === 0) {
      goingDown = true;
    }

    currentRail += goingDown ? 1 : -1;
  }

  return rails.join("");
}

export function railFenceDecrypt(text, numRails) {
  if (numRails < 2) {
    return text;
  }

  const len = text.length;

  const railLengths = Array(numRails).fill(0);
  let currentRail = 0;
  let goingDown = true;

  for (let i = 0; i < len; i++) {
    railLengths[currentRail]++;

    if (currentRail === numRails - 1) {
      goingDown = false;
    }

    if (currentRail === 0) {
      goingDown = true;
    }

    currentRail += goingDown ? 1 : -1;
  }

  const rails = [];
  let index = 0;

  for (let r = 0; r < numRails; r++) {
    rails.push(text.slice(index, index + railLengths[r]));
    index += railLengths[r];
  }

  const railIndices = Array(numRails).fill(0);
  let result = "";
  currentRail = 0;
  goingDown = true;

  for (let i = 0; i < len; i++) {
    result += rails[currentRail][railIndices[currentRail]];
    railIndices[currentRail]++;

    if (currentRail === numRails - 1) {
      goingDown = false;
    }

    if (currentRail === 0) {
      goingDown = true;
    }

    currentRail += goingDown ? 1 : -1;
  }

  return result;
}

export function buildRailMap(text, numRails) {
  if (!text || numRails < 2) {
    return [];
  }

  const result = [];
  let currentRail = 0;
  let goingDown = true;

  for (let i = 0; i < Math.min(text.length, 30); i++) {
    result.push({ char: text[i], rail: currentRail });

    if (currentRail === numRails - 1) {
      goingDown = false;
    }

    if (currentRail === 0) {
      goingDown = true;
    }

    currentRail += goingDown ? 1 : -1;
  }

  return result;
}
