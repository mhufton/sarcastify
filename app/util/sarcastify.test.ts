import "@testing-library/jest-dom"
import { sarcastify } from "./sarcastify"

describe("sarcastify", () => {
  it("should sarcastify a string", () => {
    const input = "Hello, world!"
    const expectedOutput = "HeLlO, wOrLd!"
    const result = sarcastify(input)
    expect(result).toEqual(expectedOutput)
  })

  it("should handle empty string", () => {
    const input = ""
    const expectedOutput = ""
    const result = sarcastify(input)
    expect(result).toEqual(expectedOutput)
  })

  it("should handle string with non-characters", () => {
    const input = "123abc!@#"
    const expectedOutput = "123AbC!@#"
    const result = sarcastify(input)
    expect(result).toEqual(expectedOutput)
  })

  it("should handle string and chars when special chars are in between chars", () => {
    const input = "a!b@c#"
    const expectedOutput = "A!b@C#"
    const result = sarcastify(input)
    expect(result).toEqual(expectedOutput)
  })
})
