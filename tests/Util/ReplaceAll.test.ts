const { expect } = require('chai');
import { suite, test, slow, timeout } from "mocha-typescript";
import {replaceAll, replaceAllArray} from "../../src/Core/Util/ReplaceAll";

@suite class ReplaceAllTest {
    @test replaceAllFn() {
        let originalString = 'aaa - aaa - aaa - aa1';
        let expectedString = 'bbb - bbb - bbb - aa1';
        expect(replaceAll(originalString, 'aaa', 'bbb')).equal(expectedString);
    }

    @test replaceAllArrayFn() {
        let originalString = 'aaa - aaa - aaa - aa1';
        let expectedString = 'bbb % bbb % bbb % aa1';
        expect(replaceAllArray(originalString, ['aaa', ' - '], ['bbb', ' % '])).equal(expectedString);
    }
}
