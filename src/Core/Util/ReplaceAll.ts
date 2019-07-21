export function replaceAll(text: string, search: string, replacement: string) {
    return text.split(search).join(replacement);
}