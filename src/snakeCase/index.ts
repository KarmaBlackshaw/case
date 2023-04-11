export default function snakeCase(str: string): string {
  return str.replace(/\s+/g, '_').toLowerCase();
}