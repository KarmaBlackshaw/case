const rquotes = /['"\u2019]/;
const rpunctuation = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
const rscoped = /\((c|tm|r|p)\)/ig;
const scoped: Record<string, string> = {
  c: '©',
  r: '®',
  p: '§',
  tm: '™'
};

function beautifyQuotes (text: string): string {
  if (!rquotes.test(text)) {
    return text;
  }
  return text
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018') // opening singles
    .replace(/'/g, '\u2019') // closing singles & apostrophes
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c') // opening doubles
    .replace(/"/g, '\u201d'); // closing doubles
}

function beautifyScoped (text: string): string {
  return text.replace(rscoped, (_, name) => scoped[name.toLowerCase()]);
}

function beautifyPunctuation (text: string): string {
  if (!rpunctuation.test(text)) {
    return text;
  }
  return text
    .replace(/\+-/g, '±')
    .replace(/\.{2,}/g, '…') // .., ..., ....... -> …
    .replace(/([?!])…/g, '$1..') // ?..... & !..... -> ?.. & !..
    .replace(/([?!]){4,}/g, '$1$1$1').replace(/,{2,}/g, ',')
    .replace(/(^|\s)--(\s|$)/mg, '$1\u2013$2') // en-dash
}

export default function beautifyText(text: string): string {
  return beautifyQuotes(beautifyPunctuation(beautifyScoped(text)));
}