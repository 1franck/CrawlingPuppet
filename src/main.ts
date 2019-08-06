import {FileStorage} from './Core/Storage/FileStorage';
import {PuppeteerFactory} from './Core/PuppeteerFactory';
import {PageRecorder} from './Core/PageRecorder';
import {SameHostLinksParser} from './Core/Parser/SameHostLinksParser';
import {Config} from './Core/CrawlingPuppet';
import {sleep, randomSleep} from './Core/Util/Sleep';
import {urlToFilename} from './Core/Util/UrlToFilename';
import {URL} from 'url';
import {shuffle} from './Core/Util/Shuffle';
import commandLineArgs = require('command-line-args');
import ora = require('ora');
import {PageNavigator} from "./Core/PageNavigator";

(async() => {

    try {

        const optionDefinitions = [
            { name: 'url', alias: 'u', type: String },
            { name: 'delay', alias: 'd', type: Number },
            { name: 'randomDelay', alias: 'r', type: Boolean }
        ];
        const options = commandLineArgs(optionDefinitions, { partial: true, camelCase: true });

        if (!options.url) {
            throw Error('it appears that --url argument is missing sir!');
        } else if (options._unknown) {
            throw Error('unknown option: ' + options._unknown.join(', '));
        }

        const spinner = ora('Wakening the puppet ...').start();

        const storage = new FileStorage('./tmp'),
            browser = await PuppeteerFactory.createBrowser(),
            page = await PuppeteerFactory.createPage(browser),
            pageRecorder = new PageRecorder(storage),
            pageNavigator = new PageNavigator(),
            urls =  [options.url];


        for (let i = 0; i < urls.length; i++) {

            spinner.start('processing url #' + (i+1) + ' (of ' + urls.length + ') : ' + urls[i]);
            storage.setPath('./tmp/' + (new URL(urls[i])).hostname);

            await pageNavigator.navigate(page, urls[i]);
            await pageRecorder.record(page, urlToFilename(urls[i]));

            let discover = 0;
            let childUrls = await (new SameHostLinksParser(urls[i])).parse(page);

            //console.log(childUrls);
            childUrls = shuffle(childUrls);
            for (let childUrl of childUrls) {
                if (urls.indexOf(childUrl) == -1) { // only add new url
                    urls.push(childUrl);
                    discover++;
                }
            }
            //spinner.succeed();
            spinner.succeed('... ' + discover + ' new links found!');

            if (options.delay) {
                await sleep(options.delay);
            } else if (options.randomDelay) {
                await randomSleep(800, 8700);
            }
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
        // console.log(error);
        console.log(error.message);
        process.exit();
    }

})();