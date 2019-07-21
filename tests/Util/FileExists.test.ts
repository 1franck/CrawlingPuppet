const { expect } = require('chai');
import { suite, test, slow, timeout } from "mocha-typescript";
import {fileExists} from "../../src/Core/Util/FileExists";

@suite class FileExistsTest {
    @test yes() {
        expect(fileExists(__filename)).equal(true);
    }

    @test no() {
        expect(fileExists(__filename + '02350340503245020341034023')).equal(false);
    }
}
