import * as puppeteer from 'puppeteer'
import { Browser, Page } from 'puppeteer'

export class PuppeteerFactory {
  static async createBrowser(): Promise<Browser> {
    return await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      defaultViewport: null,
    })
  }

  static async createPage(browser: Browser): Promise<Page> {
    const page = await browser.newPage()
    await page.setUserAgent(
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3239.108 Safari/537.36',
    )
    return page
  }
}
