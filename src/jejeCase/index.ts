const isProbablyTrue = () => Math.random() > 0.4
const isVowel = (char: string) => char && 'aeiou'.includes(char.toLowerCase())
const isLastCharVowel = (str: string) => isVowel(str[str.length - 1])

export default function toJeje(str: string) {
  if (!str) {
    return '';
  }

  const jejeCharacterMap: Record<string, string[]> = {
    a: ['4'],
    e: ['3'],
    i: ['1', '!'],
    g: ['6'],
    o: ['0'],
    s: ['5', 'cxs', 'zxcs']
  }

  const toJejeChar = (char: string) => {
    const isJeje = isProbablyTrue()
    const isUpperProbability = isProbablyTrue()

    const jejeChar = jejeCharacterMap[char]

    if (isJeje && jejeChar) {
      return jejeChar[Math.floor(Math.random() * jejeChar.length)]
    }

    return (isUpperProbability ? char.toUpperCase() : char)
  }

  return str
    .toLowerCase()
    .trim()
    .split(' ')
    .map(word => {
      const prefixWithH = isProbablyTrue()
      const isPrefixableWithH = isLastCharVowel(word)

      const newWord = prefixWithH && isPrefixableWithH
        ? `${word}h`
        : word

      return Array.from(newWord)
        .map(toJejeChar)
        .join('')
    })
    .join(' ')
}