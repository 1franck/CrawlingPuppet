import {
  replaceAll,
  replaceAllArray
} from "../../src/Core/Util/ReplaceAll"

test('test ReplaceAll', () => {
  let originalString = 'aaa - aaa - aaa - aa1';
  let expectedString = 'bbb - bbb - bbb - aa1';
  expect(replaceAll(originalString, 'aaa', 'bbb')).toEqual(expectedString);

  originalString = 'aaa - aaa - aaa - aa1';
  expectedString = 'bbb % bbb % bbb % aa1';
  expect(replaceAllArray(originalString, ['aaa', ' - '], ['bbb', ' % '])).toEqual(expectedString);
})
