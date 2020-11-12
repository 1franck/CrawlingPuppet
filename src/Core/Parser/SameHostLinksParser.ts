import { Page } from 'puppeteer'
import { URL } from 'url'
import { ParserInterface } from '../CrawlingPuppet'

export class SameHostLinksParser implements ParserInterface {
  private hostname: string

  constructor(url: string) {
    this.hostname = new URL(url).hostname
  }

  async parse(page: Page): Promise<any> {
    const sameHostLinks = []
    const links: any = await page.$$eval('a', (e) => e.map((a) => a.href))

    for (const link of links) {
      try {
        const linkHostname = new URL(link).hostname
        if (
          linkHostname === this.hostname ||
          linkHostname === 'www.' + this.hostname ||
          'www.' + linkHostname === this.hostname
        ) {
          if (sameHostLinks.indexOf(link) === -1) {
            sameHostLinks.push(link)
          }
        }
      } catch (Error) {
        // just ignore invalid url for now
      }
    }

    return sameHostLinks
  }
}
