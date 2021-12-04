exports.testArr = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
]

exports.part1 = function (arr) {
  const count = Array(arr[0].length).fill(0)
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[0].length; col++) {
      count[col] += parseInt(arr[row][col])
    }
  }
  const gamma = parseInt(count.map(number => number > Math.floor(arr.length / 2) ? 1 : 0).join(''), 2)
  const epsilon = gamma ^ parseInt(Array(count.length).fill(1).join(''),2)
  return gamma * epsilon
}

exports.part2 = function (arr) {
  function getRating(criteria = 'most') {
    let filtered = arr
    let pos = 0
    while (filtered.length > 1) {
      let count = 0
      for (let i = 0; i < filtered.length; i++) {
        count += parseInt(filtered[i][pos])
      }

      let bitToKeep
      if (criteria === 'most') {
        bitToKeep = count >= Math.ceil(filtered.length / 2) ? '1' : '0'
      } else {
        bitToKeep = count < Math.ceil(filtered.length / 2) ? '1' : '0'
      }
      filtered = filtered.filter(item => item[pos] === bitToKeep)
      pos++
    }
    return filtered[0]
  }
  const o2Rating = parseInt(getRating('most'), 2)
  const co2ScrubberRating = parseInt(getRating('least'), 2)
  return o2Rating * co2ScrubberRating
}