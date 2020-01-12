const { describe, it } = require('mocha')
const expect = require('chai').expect

describe('Unit Test', () => {
    it('knows what\'s what', () => {
        expect('what').to.eq('what')
    })
})
