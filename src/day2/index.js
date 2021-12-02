exports.testArr = [
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
]

exports.part1 = function (arr) {
  let distance = 0
  let depth = 0

  for (let direction of arr) {
    const [command, input] = direction.split(' ');
    const number = parseInt(input)

    if (command === 'forward') {
      distance += number
    } else if (command === 'up') {
      depth -= number
    } else {
      depth += number
    }
  }
  return distance * depth
}

exports.part2 = function (arr) {
  let distance = 0
  let depth = 0
  let aim = 0

  for (let direction of arr) {
    const [command, input] = direction.split(' ');
    const number = parseInt(input)

    if (command === 'forward') {
      distance += number
      depth += (number * aim)
    } else if (command === 'up') {
      aim -= number
    } else {
      aim += number
    }
  }
  return distance * depth
}