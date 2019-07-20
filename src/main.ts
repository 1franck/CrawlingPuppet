import {Cli} from "./Core/Cli";
import {FileStorage} from "./Core/Storage/FileStorage";
import {PuppeteerFactory} from "./Core/PuppeteerFactory";
import {Utils} from "./Core/Utils";
import {PageRecorder} from "./Core/PageRecorder";
import {SameHostLinksParser} from "./Core/Parser/SameHostLinksParser";
import {Config} from "./Core/CrawlingPuppet";

(async() => {

    try {

        const storage = new FileStorage('./tmp'),
            browser = await PuppeteerFactory.createBrowser(),
            page = await PuppeteerFactory.createPage(browser),
            pageRecorder = new PageRecorder(page, storage),
            url = Cli.getUrl();

        await pageRecorder.record(url, Utils.url2filename(url));

        // console.log(await (new SameHostLinksParser(url)).parse(page));

        let config: Config = {
            url: url,
            storage: {
                driver: storage,
                details: {
                    'foo' : 'bar'
                }
            }
        };

        await browser.close();


    }
    catch(error) {
        console.log(error.message);
        process.exit();
    }

})();