import * as fs from "fs";

export class Utils
{
    static url2filename(url: string): string {

        url = Utils.replaceAll(url, "://", "_");
        url = Utils.replaceAll(url, ".", "_");
        url = Utils.replaceAll(url, "/", "_");
        url = Utils.replaceAll(url, '\?', '_');
        url = Utils.replaceAll(url, '&', '_');
        url += '.dump';

        // Replace last UNDERSCORE with a DOT
        // uniqueName = uniqueName.substring(0,uniqueName.lastIndexOf('_')) +"."+uniqueName.substring(uniqueName.lastIndexOf('_')+1,uniqueName.length);
        return url;
    }

    static replaceAll(text: string, search: string, replacement: string) {
        return text.split(search).join(replacement);
    }

    static fileExists(filepath: string): boolean {
        try {
            if (fs.existsSync(filepath)) {
                return true
            }
        } catch(err) {
            return false;
        }
    }
}