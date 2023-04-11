function toWide(str) {
  return str.split('').join(' ');
}

function toWideLower(str) {
  return toWide(str).toLowerCase();
}

export { toWideLower as default };
