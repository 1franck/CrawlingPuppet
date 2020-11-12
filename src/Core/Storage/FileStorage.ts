import * as fs from 'fs'
import { StorageInterface } from '../CrawlingPuppet'
import { fileExists } from '../Util/FileExists'
import { promisify } from 'es6-promisify'

const mkdir = promisify(fs.mkdir)

export class FileStorage implements StorageInterface {
  constructor(private path: string) {}

  setPath(path: string) {
    this.path = path
  }

  async save(name: string, content: string, metadata: any): Promise<any> {
    let content2Save = content
    if (metadata.url !== undefined) {
      content2Save = '|||||||||' + JSON.stringify(metadata) + '|||||||||' + '\n' + content
    }
    await this.saveFile(name, content2Save)
  }

  private async saveFile(name: string, content: string) {
    const filepath = this.path + '/' + name

    if (!fileExists(this.path)) {
      await mkdir(this.path).catch((err: any) => {
        throw err
      })
    }

    fs.writeFile(filepath, content, (err) => {
      if (err) {
        throw err
      }
    })
  }
}
