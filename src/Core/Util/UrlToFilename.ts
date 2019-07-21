import {replaceAll} from "./ReplaceAll";

export function urlToFilename(url: string): string {

    url = replaceAll(url, "://", "_");
    url = replaceAll(url, ".", "_");
    url = replaceAll(url, "/", "_");
    url = replaceAll(url, '\?', '_');
    url = replaceAll(url, '&', '_');
    url += '.dump';

    // Replace last UNDERSCORE with a DOT
    // uniqueName = uniqueName.substring(0,uniqueName.lastIndexOf('_')) +"."+uniqueName.substring(uniqueName.lastIndexOf('_')+1,uniqueName.length);
    return url;
}