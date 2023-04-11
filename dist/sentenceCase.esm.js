function sentenceCase(str) {
  if (!str) {
    return '';
  }
  const trimmed = str.trim();
  const firstChar = trimmed[0].toUpperCase();
  const rest = trimmed.slice(1).toLowerCase();
  return `${firstChar}${rest}`;
}

export { sentenceCase as default };
