import {Cli} from "./Core/Cli";
import {FileStorage} from "./Core/Storage/FileStorage";
import {PuppeteerFactory} from "./Core/PuppeteerFactory";
import {PageRecorder} from "./Core/PageRecorder";
import {SameHostLinksParser} from "./Core/Parser/SameHostLinksParser";
import {Config} from "./Core/CrawlingPuppet";
import {sleep} from "./Core/Util/Sleep";
import {urlToFilename} from "./Core/Util/UrlToFilename";

// const commandLineArgs = require('command-line-args')

(async() => {

    try {

        const storage = new FileStorage('./tmp'),
            browser = await PuppeteerFactory.createBrowser(),
            page = await PuppeteerFactory.createPage(browser),
            pageRecorder = new PageRecorder(page, storage),
            urls =  [Cli.getUrl()];


        for (let i = 0; i < urls.length; i++) {

            await pageRecorder.record(urls[i], urlToFilename(urls[i]));

            let childUrls = await (new SameHostLinksParser(urls[i])).parse(page);
            console.log(childUrls);

            //  = Utils.shuffle();
            // for (let childUrl of childUrls) {
            //     urls.push(childUrl)
            // }

            await sleep(5000);
        }


        // console.log();
        //
        // let config: Config = {
        //     url: url,
        //     storage: {
        //         driver: storage,
        //         details: {
        //             'foo' : 'bar'
        //         }
        //     }
        // };

        await browser.close();


    }
    catch(error) {
        console.log(error)
        console.log(error.message);
        process.exit();
    }

})();