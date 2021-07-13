// Write your tests here!
const substitution = require("../src/substitution").substitution
const expect = require("chai").expect

describe("substitution", () => {
    it("should return false if the alphabet length is not equal to 26", () => {
        let alphabet = "zyxwvut"
        let input = "Stephanie Duong"
        let actual = substitution(input, alphabet, encode = true)
        expect(actual).to.be.false
    })
    it("should cipher the message in the substitution alphabet", () => {
        let alphabet = "xoyqmcgrukswaflnthdjpzibev"
        let input = "thinkful"
        let expected = "jrufscpw"
        let actual = substitution(input, alphabet, encode = true)
        expect(actual).to.equal(expected)
    })
    it("should decode a message by using the given substitution alphabet", () => {
        let alphabet = "xoyqmcgrukswaflnthdjpzibev"
        let input = "jrufscpw"
        let expected = "thinkful"
        let actual = substitution(input, alphabet, encode = false)
        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters", () => {
        let alphabet = "xoyqmcgrukswaflnthdjpzibev"
        let input = "You are an excellent spy"
        let expected = "elp xhm xf mbymwwmfj dne"
        let actual = substitution(input, alphabet, encode = true)
        expect(actual).to.equal(expected)
    })
    it("should preserve spaces", () => {
        let alphabet = "xoyqmcgrukswaflnthdjpzibev"
        let input = "You are an excellent spy"
        let expected = "elp xhm xf mbymwwmfj dne"
        let actual = substitution(input, alphabet, encode = true)
        expect(actual).to.equal(expected)
    })
    it("should work with any kind of key with unique characters", () => {
        let alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
        let input = "y&ii$r&"
        let expected = "message"
        let actual = substitution(input, alphabet, encode = false)
        expect(actual).to.equal(expected)
    })
})