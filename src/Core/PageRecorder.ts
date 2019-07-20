import {Page} from "puppeteer";
import {PageRecorder as PR, Storage} from "./CrawlingPuppet";

export class PageRecorder implements PR
{
    constructor(private page: Page, private storage: Storage) {}

    async record(url: string, name: string): Promise<any> {

        await this.page.goto(url);
        await this.page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
        let content = await this.page.content();
        let metadata = {
            url: url,
            date: Date.now(),
        };

        this.storage.save(name, content, metadata);
    }
}