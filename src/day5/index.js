exports.testArr = [
  '0,9 -> 5,9',
  '8,0 -> 0,8',
  '9,4 -> 3,4',
  '2,2 -> 2,1',
  '7,0 -> 7,4',
  '6,4 -> 2,0',
  '0,9 -> 2,9',
  '3,4 -> 1,4',
  '0,0 -> 8,8',
  '5,5 -> 8,2',
]

exports.part1 = function (arr) {
  const lines = arr.map(item => item.split(' -> ').map(point => point.split(',').map(n => parseInt(n))))
  const cloud = {}
  let count = 0

  for (let [[x1, y1], [x2, y2]] of lines) {
    if (x1 === x2 || y1 === y2) {
      const points = Math.abs(x1 - x2) || Math.abs(y1 - y2)
      let minX = Math.min(x1, x2)
      let minY = Math.min(y1, y2)

      let key
      for (let p = 0; p <= points; p++) {
        key = `${minX + (x1 === x2 ? 0 : p)}, ${minY + (y1 === y2 ? 0 : p)}`
        count += cloud[key] === 1 ? 1 : 0
        cloud[key] = (cloud[key] || 0) + 1
      }
    }
  }
  return count
}

exports.part2 = function (arr) {
  const lines = arr.map(item => item.split(' -> ').map(point => point.split(',').map(n => parseInt(n))))
  const cloud = {}
  let count = 0

  for (let [[x1, y1], [x2, y2]] of lines) {
    if (x1 === x2) {
      for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
        const key = `${x1},${y}`
        count += cloud[key] === 1 ? 1 : 0
        cloud[key] = (cloud[key] || 0) + 1
      }
    } else if (y1 === y2) {
      for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
        const key = `${x},${y1}`
        count += cloud[key] === 1 ? 1 : 0
        cloud[key] = (cloud[key] || 0) + 1
      }
    } else {
      const start = x1 < x2 ? [x1, y1] : [x2, y2]
      const end = x1 < x2 ? [x2, y2] : [x1, y1]
      const points = end[0] - start[0] || end[1] - start[0]

      for (let i = 0; i <= points; i++) {
        const key = `${start[0] + i},${start[1] + (start[1] < end[1] ? i : -i)}`
        count += cloud[key] === 1 ? 1 : 0
        cloud[key] = (cloud[key] || 0) + 1
      }
    }
  }
  return count
}
