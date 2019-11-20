import expect from "./expect"
import { Boiler } from "../src"

describe("boiler", () => {
  it("should instantiate", () => {
    new Boiler()
  })

  it("should assert", () => {
    expect(true).toBe(true)
  })
})
