import { Page } from 'puppeteer'

export type ConfigType = {
  url: string
  storage: StorageConfigType
}

export type StorageConfigType = {
  driver: StorageInterface
  details: ObjectInterface
}

export interface ObjectInterface {
  [key: string]: any
}

export interface ParserInterface {
  parse(page: Page): any
}

export interface StorageInterface {
  save(name: string, content: string, metadata: ObjectInterface): any
}

export interface PageRecorderInterface {
  record(page: Page, name: string): Promise<any>
}

export interface PageNavigatorInterface {
  navigate(page: Page, url: string): Promise<any>
}
