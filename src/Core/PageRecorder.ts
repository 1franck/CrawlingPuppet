import {StorageInterface} from "../Domain/StorageInterface";
import {Page} from "puppeteer";

export class PageRecorder
{
    constructor(private page: Page, private storage: StorageInterface) {}

    async record(url: string, name: string) {

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