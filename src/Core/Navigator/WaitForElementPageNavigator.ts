import {Page} from 'puppeteer';
import {PageNavigator as PN} from './../CrawlingPuppet';

export class WaitForElementPageNavigator implements PN
{
    constructor(private waitForSelector: string) {}

    async navigate(page: Page, url: string): Promise<any> {
        await page.goto(url, {waitUntil: 'networkidle2'});
        await page.waitForSelector(this.waitForSelector);
        await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
    }
}