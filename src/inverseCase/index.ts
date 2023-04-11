const isUpperCase = (char: string) => char.toUpperCase() === char

export default function toInverse(str: string) {
  return str
    .split('')
    .map(char => isUpperCase(char)
      ? char.toLowerCase()
      : char.toUpperCase()
    )
    .join('')
}