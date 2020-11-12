import { fileExists } from "../../src/Core/Util/FileExists"

test('test FileExists', () => {
  expect(fileExists(__filename)).toBeTruthy()
  expect(fileExists(__filename + '02350340503245020341034023')).toBeFalsy()
})
