import {Page} from "puppeteer";
import {PageRecorder as PR, Storage} from "./CrawlingPuppet";

export class PageRecorder implements PR
{
    constructor(private storage: Storage) {}

    async record(page: Page, name: string): Promise<any> {

        let content = await page.content();
        let metadata = {
            url: page.url(),
            date: Date.now(),
        };

        await this.storage.save(name, content, metadata);
    }
}