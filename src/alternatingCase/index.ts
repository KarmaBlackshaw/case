export function toAlternating (str: string) {
  return str
    .split('')
    .map((char, i) => i % 2 === 0
      ? char.toUpperCase()
      : char.toLowerCase()
    )
    .join('')
}