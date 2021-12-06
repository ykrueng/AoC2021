exports.testArr = ['3', '4', '3', '1', '2']

const part1 = function (arr, days = 80) {
  const count = Array(9).fill(0)
  for (let time of arr) {
    count[time]++
  }
  for (let day = 1; day <= days; day++) {
    const zeros = count.shift()
    count.push(zeros)
    count[6] += zeros
  }
  return count.reduce((c1, c2) => c1 + c2)
}

exports.part1 = part1

exports.part2 = function (arr) {
  return part1(arr, 256)
}
