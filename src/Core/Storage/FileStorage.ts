import * as fs from "fs";
import {Storage} from "../CrawlingPuppet";

export class FileStorage implements Storage
{
    constructor(private path: string) {}

    save(name: string, content: string, metadata: any): any {

        let content2Save = content;
        if (metadata.url !== undefined) {
            content2Save = '|||||||||' + JSON.stringify(metadata) + '|||||||||' + "\n" + content;
        }
        let filepath = this.path + '/' + name;

        fs.writeFile(filepath, content2Save, (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;
            // success case, the file was saved
            console.log('Content saved under ' + filepath);
        });
    }
}