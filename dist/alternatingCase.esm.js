function toAlternating(str) {
  return str.split('').map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
}

export { toAlternating as default };
