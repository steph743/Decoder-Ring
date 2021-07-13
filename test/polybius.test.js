// Write your tests here!
const polybius = require("../src/polybius").polybius
const expect = require("chai").expect

describe("polybius", () => {
    it("should return the encoded message", () => {
        let input = "thinkful"
        let expected = "4432423352125413"
        let actual = polybius(input, encode = true)
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces", () => {
        let input = "Hello world"
        let expected = "3251131343 2543241341"
        let actual = polybius(input, encode = true)
        expect(actual).to.equal(expected)
    })
    it("should translate both 'i' and 'j' to 42", () => {
        let input = "thinkful"
        let expected = "4432423352125413"
        let actual = polybius(input, encode = true)
        expect(actual).to.equal(expected)
    })
    it("should decode a message by translating each pair of numbers into a letter", () => {
        let input = "4432423352125413"
        let expected = "th(i/j)nkful"
        let actual = polybius(input, encode = false)
        expect(actual).to.equal(expected)
    })
    it("should translate 42 to both 'i' and 'j'", () => {
        let input = "4432423352125413"
        let expected = "th(i/j)nkful"
        let actual = polybius(input, encode = false)
        expect(actual).to.equal(expected)
    })
})