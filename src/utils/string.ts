export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function cleanError(string: string) {
  if (string.includes('querystring/')) {
    string = string.replace('querystring/', '')
  }
  return capitalizeFirstLetter(string)
}
