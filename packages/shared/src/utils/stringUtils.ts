/**
 * Capitalizes the first letter of a string
 * @param str String to capitalize
 * @returns Capitalized string
 */
export function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to the specified length
 * @param str String to truncate
 * @param maxLength Maximum length of the string
 * @param suffix Optional suffix to add to truncated string
 * @returns Truncated string
 */
export function truncate(
  str: string,
  maxLength: number,
  suffix: string = "..."
): string {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength) + suffix;
}

/**
 * Converts a string to snake_case
 * @param str String to convert
 * @returns snake_case string
 */
export function toSnakeCase(str: string): string {
  if (!str) return "";
  return str
    .replace(/([A-Z])/g, "_$1")
    .toLowerCase()
    .replace(/^_/, "")
    .replace(/ /g, "_");
}
