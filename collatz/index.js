/**
 * Method to return how much times the sequence of Collatz
 * could be applied to a number
 *
 * @param {Number} number
 * @param {[number]} finalResult
 * @returns time of applied Collatz
 */

const collatzConjucture = (number, finalResult = []) => {
  if (!number) return 0

  const toNumber = Number(number)
  if (Number.isNaN(toNumber) || toNumber < 1) return 0

  const result = toNumber % 2 ? 3 * toNumber + 1 : toNumber / 2
  finalResult.push(result)

  if (result !== 1) {
    return collatzConjucture(result, finalResult)
  }

  return {
    times: finalResult.length + 1,
    biggest: Math.max(...finalResult)
  }
}

module.exports = collatzConjucture
