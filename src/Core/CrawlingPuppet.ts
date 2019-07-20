import {Page} from "puppeteer";

export type Config = {
    url: string
    storage: StorageConfig
}

export type StorageConfig = {
    driver: Storage
    details: object
}

export interface Parser {
    parse(page: Page): any;
}

export interface Storage {
    save(name: string, content: string, metadata: object): any;
}

export interface PageRecorder {
    record(url: string, name: string, test: string): Promise<any>
}