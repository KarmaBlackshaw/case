function kebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase();
}

function sentenceCase(str) {
  if (!str) {
    return '';
  }
  const trimmed = str.trim();
  const firstChar = trimmed[0].toUpperCase();
  const rest = trimmed.slice(1).toLowerCase();
  return `${firstChar}${rest}`;
}

function titleCase(str) {
  if (!str) {
    return '';
  }
  const words = str.toLowerCase().split(' ');
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

var index = {
  kebabCase,
  sentenceCase,
  titleCase
};

export { index as default };
