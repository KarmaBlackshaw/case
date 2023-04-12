function titleCase(str, options = {
  transform: []
}) {
  if (!str) {
    return '';
  }
  const {
    transform = []
  } = options;
  const words = str.toLowerCase().split(' ');
  const titleCase = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  if (transform.length) {
    let tempTitleCase = titleCase;
    transform.forEach(phrase => {
      tempTitleCase = tempTitleCase.replace(new RegExp(phrase, 'gi'), phrase);
    });
    return tempTitleCase;
  }
  return titleCase;
}

export { titleCase as default };
