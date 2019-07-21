const { expect } = require('chai');
import {urlToFilename} from "../../src/Core/Util/UrlToFilename";
import { suite, test, slow, timeout } from "mocha-typescript";

@suite class UrlToFilenameTest {
    @test url1() {
        expect(urlToFilename("http://wikipedia.org?test")).equal("http_wikipedia_org_test.dump");
    }
}
