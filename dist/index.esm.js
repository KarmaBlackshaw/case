function kebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase();
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
  titleCase
};

export { index as default };
