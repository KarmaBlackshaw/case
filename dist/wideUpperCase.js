'use strict';

function toWide(str) {
  return str.split('').join(' ');
}

function toWideLower(str) {
  return toWide(str).toUpperCase();
}

module.exports = toWideLower;
