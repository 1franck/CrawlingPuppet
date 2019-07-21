import * as fs from "fs";

export function fileExists(filepath: string): boolean {
    try {
        if (fs.existsSync(filepath)) {
            return true
        }
        return false;
    } catch(err) {
        return false;
    }
}