import {replaceAllArray} from "./ReplaceAll";

export function urlToFilename(url: string): string {

    url = replaceAllArray(
        url,
        ["://", ".", "/", "\?", "&"],
        ["_"]
    );

    url += '.dump';
    return url;
}
