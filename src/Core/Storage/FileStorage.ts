import * as fs from "fs";
import {Storage} from "../CrawlingPuppet";
import {fileExists} from "../Util/FileExists";

export class FileStorage implements Storage
{
    constructor(private path: string) {}

    setPath(path: string) {
        this.path = path;
    }

    save(name: string, content: string, metadata: any): any {

        let content2Save = content;
        if (metadata.url !== undefined) {
            content2Save = '|||||||||' + JSON.stringify(metadata) + '|||||||||' + "\n" + content;
        }
        this.saveFile(name, content2Save);
    }

    private saveFile(name: string, content: string) {

        let filepath = this.path + '/' + name;

        if (!fileExists(this.path)) {
            fs.mkdir(this.path,(err) => {
                if(err) {
                    throw err;
                }
            });
        }

        fs.writeFile(filepath, content, (err) => {
            if (err) {
                throw err;
            }
        });
    }
}