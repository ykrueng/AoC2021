const { getInputArray } = require("./src/utils")
const { sonarSweep, sonarSweepSliding } = require("./src/day1")

const arr = getInputArray("src/day1/input.txt");

const testArr = [
  199,
  200,
  208,
  210,
  200,
  207,
  240,
  269,
  260,
  263,
]

function main() {
  console.log('Advent of Code 2001')
  console.log('Ex.1-test: ', sonarSweep(testArr))
  console.log('Ex.1: ', sonarSweep(arr))
  console.log('Ex.2-test: ', sonarSweepSliding(testArr))
  console.log('Ex.2: ', sonarSweepSliding(arr))
}

main()