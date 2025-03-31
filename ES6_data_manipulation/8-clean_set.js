export default function cleanSet(set, startString) {
  if (startString === null || startString === undefined || startString === '') {
    return '';
  }
  const finalString = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      finalString.push(value.slice(startString.length));
    }
  });
  return finalString.join('-');
}
