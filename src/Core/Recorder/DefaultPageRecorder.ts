import { Page } from 'puppeteer'
import { PageRecorderInterface as PR, StorageInterface } from '../CrawlingPuppet'

export class DefaultPageRecorder implements PR {
  constructor(private storage: StorageInterface) {}

  async record(page: Page, name: string): Promise<any> {
    const content = await page.content()
    const metadata = {
      url: page.url(),
      date: Date.now(),
    }

    await this.storage.save(name, content, metadata)
  }
}
