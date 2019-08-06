import {replaceAllArray} from "./ReplaceAll";

export function urlToFilename(url: string): string {

    return replaceAllArray(
        url,
        ["://", ".", "/", "\?", "&"],
        ["_"]
    );
}
