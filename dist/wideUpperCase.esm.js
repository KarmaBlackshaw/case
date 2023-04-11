function toWide(str) {
  return str.split('').join(' ');
}

function toWideLower(str) {
  return toWide(str).toUpperCase();
}

export { toWideLower as default };
