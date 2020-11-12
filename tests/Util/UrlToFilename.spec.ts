import { urlToFilename } from "../../src/Core/Util/UrlToFilename"

test('test UrlToFilename', () => {
  expect(urlToFilename("http://wikipedia.org?test")).toEqual("http_wikipedia_org_test");
})
