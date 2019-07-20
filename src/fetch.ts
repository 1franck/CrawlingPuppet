import {Cli} from "./Core/Cli";
import {FileStorage} from "./Core/Storage/FileStorage";
import {PuppeteerFactory} from "./Core/PuppeteerFactory";
import {Utils} from "./Core/Utils";
import {PageRecorder} from "./Core/PageRecorder";
import {SameHostLinksParser} from "./Core/Parser/SameHostLinksParser";

(async() => {

    try {

        const storage = new FileStorage(),
            browser = await PuppeteerFactory.createBrowser(),
            page = await PuppeteerFactory.createPage(browser),
            pageRecorder = new PageRecorder(page, storage),
            url = Cli.getUrl();

        await pageRecorder.record(url, Utils.url2filename(url));

        // console.log(await (new SameHostLinksParser(url)).parse(page));

        await browser.close();


    }
    catch(error) {
        console.log(error.message);
        process.exit();
    }

})();