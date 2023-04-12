// helpers
import beautifyText from '../../helpers/beautifyText'

// types
type Options = {
  transform?: string[],
  beautify?: boolean
}

export default function titleCase(
  str: string,
  options: Options = { transform: [] }
): string {
  if (!str) {
    return '';
  }

  const {
    transform = [],
    beautify = false
  } = options

  const words = str.toLowerCase().split(' ');

  const initialResult = words
    .map(word => {
      const firstLetterIndex = word.search(/[a-zA-Z]/)

      const capitalizedWord = word.slice(0, firstLetterIndex) +
      word.charAt(firstLetterIndex).toUpperCase() +
      word.slice(firstLetterIndex + 1)

      return capitalizedWord
    })
    .join(' ')

  const result = beautify
    ? beautifyText(initialResult)
    : initialResult

  if (transform.length) {
    let tempResult = result

    transform.forEach(phrase => {
      tempResult = tempResult.replace(new RegExp(phrase, 'gi'), phrase)
    })

    return tempResult
  }

  return result
}