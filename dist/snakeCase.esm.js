function snakeCase(str) {
  return str.replace(/\s+/g, '_').toLowerCase();
}

export { snakeCase as default };
