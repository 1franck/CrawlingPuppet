export class Cli
{
    static getUrl(): string {
        if (process.argv[2] === undefined) {
            throw Error('Specify an url to crawl ...');
        }
        return process.argv[2]
    }
}