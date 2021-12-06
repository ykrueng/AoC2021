const { getInputArray } = require("./src/utils")
const { part1, part2, testArr } = require("./src/day6")

const arr = getInputArray("src/day6/input.txt", ",", "string");

function main() {
  console.log('Advent of Code 2001')
  console.log('Ex.1-test: ', part1(testArr))
  console.log('Ex.1: ', part1(arr))
  console.log('Ex.2-test: ', part2(testArr))
  console.log('Ex.2: ', part2(arr))
}

main()