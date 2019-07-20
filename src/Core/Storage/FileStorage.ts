import {StorageInterface} from "../../Domain/StorageInterface";
import * as fs from "fs";

export class FileStorage implements StorageInterface
{
    save(name: string, content: string, metadata: any): any {

        let content2Save = content;
        if (metadata.url !== undefined) {
            content2Save = '|||||||||' + JSON.stringify(metadata) + '|||||||||' + "\n" + content;
        }

        fs.writeFile(name, content2Save, (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;
            // success case, the file was saved
            console.log('Content saved under ' + name);
        });
    }
}