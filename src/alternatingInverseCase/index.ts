export default function toAlternatingInverse (str: string) {
  return str
    .split('')
    .map((char, i) => i % 2 === 1
      ? char.toUpperCase()
      : char.toLowerCase()
    )
    .join('')
}