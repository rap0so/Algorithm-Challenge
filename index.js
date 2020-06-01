#!/usr/bin/env node
const inquirer = require("inquirer")
const chalk = require("chalk")

const algorithms = {
  characters: require('./characters'),
  collatz: require('./collatz')
}

const whatChallenge = () => {
  const questions = [
    {
      type: 'list',
      name: 'challenge',
      message: 'What algorithm you\'ll run now?',
      choices: ['characters', 'collatz']
    },
    {
      type: 'input',
      name: 'param',
      message: 'What param this algorithm should execute?'
    },
  ]
  return inquirer.prompt(questions)
}

const keepRunning = () => {
  const questions = [
    {
      type: 'list',
      name: 'userWantContinue',
      message: 'Do you wanna exit?',
      choices: ['yes', 'no']
    }
  ]
  return inquirer.prompt(questions)
}

const run = async () => {
  console.log(
    chalk.green('Welcome to algorithm challenge: \\o/')
  )

  let shouldContinue = true
  do {
    const { challenge, param } = await whatChallenge()
    console.log(`The response for ${challenge} passing param ${param} is:`)
    console.log(algorithms[challenge](param))
    const { userWantContinue } = await keepRunning()
    shouldContinue = userWantContinue === 'yes' ? false : true
  } while (shouldContinue)

  console.log(
    chalk.green('Thanks :)')
  )

}

run()
