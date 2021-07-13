// Write your tests here!
const caesar = require("../src/caesar").caesar
const expect = require("chai").expect

describe("caesar", () => {
    it("should return the encoded message", () => {
        let input = "thinkful"
        let shift = 3
        let expected = "wklqnixo"
        let actual = caesar(input, shift)
        expect(expected).to.equal(actual)
    })
    it("should return false if shift is greater than 25, less than -25, or 0", () => {
        let input = "thinkful"
        let shift = 27
        let actual = caesar(input, shift)
        expect(actual).to.be.false
    })
    it("should decode a message by shifting the letters in the opposite direction", () => {
        let input = "wklqnixo"
        let shift = 3
        let expected = "thinkful"
        let actual = caesar(input, shift, false)
        expect(expected).to.equal(actual)
    })
    it("should ignore capital letters", () => {
        let input = "This is a secret message!"
        let shift = 8
        let expected = "bpqa qa i amkzmb umaaiom!"
        let actual = caesar(input, shift)
        expect(expected).to.equal(actual)
    })
    it("should retain special characters", () => {
        let input = "This is a secret message!"
        let shift = 8
        let expected = "bpqa qa i amkzmb umaaiom!"
        let actual = caesar(input, shift)
        expect(expected).to.equal(actual)
    })
    it("should appropriately handle letters at the end of the alphabet", () => {
        let input = "zoo"
        let shift = 4
        let expected = "dss"
        let actual = caesar(input, shift)
        expect(expected).to.equal(actual)
    })
})