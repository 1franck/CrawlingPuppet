const { expect } = require('chai');
import { suite, test, slow, timeout } from "mocha-typescript";
import {replaceAll} from "../../src/Core/Util/ReplaceAll";

@suite class ReplaceAllTest {
    @test default() {
        let originalString = 'aaa - aaa - aaa - aa1';
        let expectedString = 'bbb - bbb - bbb - aa1';
        expect(replaceAll(originalString, 'aaa', 'bbb')).equal(expectedString);
    }
}
