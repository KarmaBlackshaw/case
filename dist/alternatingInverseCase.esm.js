function toAlternatingInverse(str) {
  return str.split('').map((char, i) => i % 2 === 1 ? char.toUpperCase() : char.toLowerCase()).join('');
}

export { toAlternatingInverse as default };
