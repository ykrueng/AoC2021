exports.testArr = [
  "7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1",
  "",
  "22 13 17 11  0",
  "8  2 23  4 24",
  "21  9 14 16  7",
  "6 10  3 18  5",
  "1 12 20 15 19",
  "",
  "3 15  0  2 22",
  "9 18 13 17  5",
  "19  8  7 25 23",
  "20 11 10 24  4",
  "14 21 16 12  6",
  "",
  "14 21 17 24  4",
  "10 16 15  9 19",
  "18  8 23 26 20",
  "22 11 13  6  5",
  "2  0 12  3  7",
]

function getDraws(arr) {
  return arr[0].split(',')
}

function getMatrixes(arr) {
  const matrixes = []
  for (let row = 2; row < arr.length; row += 6) {
    matrixes.push(arr.slice(row, row + 5).map(row => row.match(/\d+/g)))
  }
  return matrixes
}

function checkWinner(arr) {
  for (let row = 0; row < arr.length; row++) {
    if (arr[row][0] === '') {
      const winRow = arr[row].reduce((acc, c) => acc && c === '', true)
      if (winRow) return true
    }
  }
  for (let col = 0; col < arr[0].length; col++) {
    if (arr[0][col] === '') {
      const winCol = arr.reduce((acc, r) => acc && r[col] === '', true)
      if (winCol) return true
    }
  }
  return false
}

function getFinalScore(arr, draw) {
  return draw * arr.reduce((accRow, row) => accRow + row.reduce((accCol, col) => accCol + parseInt(col || '0'), 0), 0)
}

exports.part1 = function (arr) {
  const draws = getDraws(arr)
  let matrixes = getMatrixes(arr)

  for (let draw of draws) {
    matrixes = matrixes.map(matrix => matrix.map(row => row.map(col => col === draw ? '' : col)))
    for (let matrix of matrixes) {
      if (checkWinner(matrix)) {
        return getFinalScore(matrix, draw)
      }
    }
  }
}

exports.part2 = function (arr) {
  const draws = getDraws(arr)
  let matrixes = getMatrixes(arr)

  let n = 0
  while (true) {
    const draw = draws[n]
    matrixes = matrixes.map(matrix => matrix.map(row => row.map(col => col === draw ? '' : col)))
    n++
    for (let i = 0; i < matrixes.length; i++) {
      if (checkWinner(matrixes[i])) {
        if (matrixes.length > 1) {
          matrixes.splice(i, 1)
        } else {
          return getFinalScore(matrixes[0], draw)
        }
      }
    }
  }
}

