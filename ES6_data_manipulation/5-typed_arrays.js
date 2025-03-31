export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const Int8TypedArray = new Int8Array(buffer);
  if (position >= 0 && position < length) {
    Int8TypedArray[position] = value;
  } else {
    throw new Error('Poisition outside range');
  }
  return Int8TypedArray;
}
