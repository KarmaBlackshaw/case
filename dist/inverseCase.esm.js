const isUpperCase = char => char.toUpperCase() === char;
function toInverse(str) {
  return str.split('').map(char => isUpperCase(char) ? char.toLowerCase() : char.toUpperCase()).join('');
}

export { toInverse as default };
