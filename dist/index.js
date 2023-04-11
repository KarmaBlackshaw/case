'use strict';

const isProbablyTrue = () => Math.random() > 0.4;
const isVowel = char => char && 'aeiou'.includes(char.toLowerCase());
const isLastCharVowel = str => isVowel(str[str.length - 1]);
function toJeje(str) {
  if (!str) {
    return '';
  }
  const jejeCharacterMap = {
    a: ['4'],
    e: ['3'],
    i: ['1', '!'],
    g: ['6'],
    o: ['0'],
    s: ['5', 'cxs', 'zxcs']
  };
  const toJejeChar = char => {
    const isJeje = isProbablyTrue();
    const isUpperProbability = isProbablyTrue();
    const jejeChar = jejeCharacterMap[char];
    if (isJeje && jejeChar) {
      return jejeChar[Math.floor(Math.random() * jejeChar.length)];
    }
    return isUpperProbability ? char.toUpperCase() : char;
  };
  return str.toLowerCase().trim().split(' ').map(word => {
    const prefixWithH = isProbablyTrue();
    const isPrefixableWithH = isLastCharVowel(word);
    const newWord = prefixWithH && isPrefixableWithH ? `${word}h` : word;
    return Array.from(newWord).map(toJejeChar).join('');
  }).join(' ');
}

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

function snakeCase(str) {
  return str.replace(/\s+/g, '_').toLowerCase();
}

function titleCase(str) {
  if (!str) {
    return '';
  }
  const words = str.toLowerCase().split(' ');
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

var index = {
  jejeCase: toJeje,
  kebabCase,
  sentenceCase,
  snakeCase,
  titleCase
};

module.exports = index;
