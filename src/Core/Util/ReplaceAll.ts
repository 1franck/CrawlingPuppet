export function replaceAll(text: string, search: string, replacement: string) {
  return text.split(search).join(replacement)
}

export function replaceAllArray(text: string, searchArray: Array<string>, replacementArray: Array<string>) {
  let lastIndex = 0
  for (let i = 0; i < searchArray.length; i++) {
    if (i <= replacementArray.length - 1) {
      lastIndex = i
    }
    text = replaceAll(text, searchArray[i], replacementArray[lastIndex])
  }
  return text
}
