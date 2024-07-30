export default function cleanSet(set, startString) {
  const arr = [];
  if (startString) {
    for (const element of set) {
      if (element.startsWith(startString)) {
        arr.push(element.slice(startString.length));
      }
    }
  }
  return arr.join('-');
}
