import { Page } from 'puppeteer'
import { PageNavigatorInterface as PN } from './../CrawlingPuppet'

export class DefaultPageNavigator implements PN {
  async navigate(page: Page, url: string): Promise<any> {
    await page.goto(url, { waitUntil: 'networkidle2' })
    await page.evaluate('window.scrollTo(0, document.body.scrollHeight)')
  }
}
