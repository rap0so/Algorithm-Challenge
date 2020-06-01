const expect = require('chai').expect
const collatz = require('../collatz')
const { performance } = require('perf_hooks')

describe('Collatz test suite', () => {
  it('It should import module properly', () => {
    expect(collatz).to.be.a('function')
  })

  it('It should return 10 times receiving 13', () => {
    const { times } = collatz(13)

    expect(times).to.be.equal(10)
  })

  it('It should return result for big numbers', () => {
    const { times } = collatz(8749811251984519849516524987)

    expect(times).to.be.an('number')
  })

  it('It should correct results faster than 5 seconds for a milion', () => {
    const startTime = performance.now()

    const { times, biggest } = collatz(1000000)

    const endTime = performance.now()
    const executionTime = endTime - startTime

    expect(times).to.be.equal(153)
    expect(biggest).to.be.equal(500000)
    expect(executionTime).to.be.lessThan(5)
  })

  it('It should not return error by receiving 0', () => {
    const result = collatz(0)

    expect(result).to.be.equal(0)
  })

  it('It should not return infinity loop by receiving undefined', () => {
    const result = collatz()

    expect(result).to.be.equal(0)
  })

  it('It should return 0 by receiving a string not numbered', () => {
    const result = collatz('asdasd')

    expect(result).to.be.equal(0)
  })

  it('It should return properly by receiving a numbered string', () => {
    const { times } = collatz('13')

    expect(times).to.be.equal(10)
  })
})
