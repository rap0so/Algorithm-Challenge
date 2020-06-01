const expect = require('chai').expect
const characters = require('../characters')

describe('Characters test suite', () => {
  it('It should import module properly', () => {
    expect(characters).to.be.a('function')
  })

  it('It should return null if theres no repeated character', () => {
    const result = characters('gol')

    expect(result).to.be.null
  })

  it('It should return an array', () => {
    const result = characters('Teeste')

    expect(result).to.be.an('array')
  })

  it('It should return three characteres following the example', () => {
    const result = characters('Goool')

    expect(result).to.be.eql(['ooo'])
  })

  it('It should return a list of characteres following the example', () => {
    const result = characters('Gooooolaaaaaçooo')

    expect(result).to.be.eql(['ooooo', 'aaaaa'])
  })

  it('It should not return an error by receiving non string param', () => {
    const resultUndefined = characters()
    const resultNumber = characters(123)
    const resultArray = characters([])

    expect(resultUndefined).to.be.null
    expect(resultNumber).to.be.null
    expect(resultArray).to.be.null
  })
})
