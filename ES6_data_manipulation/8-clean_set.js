export default function cleanSet(set, startString) {
  const finalString = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      finalString.push(value.slice(startString.length));
    }
  });
  return finalString.join('-');
}
