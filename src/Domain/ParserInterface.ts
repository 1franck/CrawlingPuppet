import {Page} from "puppeteer";

export interface ParserInterface {
    parse(page: Page): any;
}