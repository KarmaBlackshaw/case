'use strict';

function snakeCase(str) {
  return str.replace(/\s+/g, '_').toLowerCase();
}

module.exports = snakeCase;
