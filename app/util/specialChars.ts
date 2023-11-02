export function findAsteriskIndices(str: string): number[] {
  // initialise asteriskIndices array
  const asteriskIndices = [];

  // loop through the string to find the asterisks and push them
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "*") {
      asteriskIndices.push(i);
    }
  }

  return asteriskIndices;
}

export function pullOutAllCharsBetweenAsterisks(
  strArray: string[],
  asteriskIndices: number[]
) {
  // go through asteriskIndices and pull out the chars between them using splice()
  // and push them into a map containing the starting asterisk index, the ending asterisk index, and the character inbetween
  const asteriskMap = new Map<number, string>();
  for (let i = 0; i < asteriskIndices.length; i++) {
    const start = asteriskIndices[i];
    const end = asteriskIndices[i + 1];
    const str = strArray.slice(start, end);
    asteriskMap.set(start, str);
  }

  return asteriskMap;
}

export function reinsertAsteriskedIndecies(
  strArray: string[],
  asteriskMap: Map<number, string>
): string {
  // loop through asteriskIndi

  return str;
}
