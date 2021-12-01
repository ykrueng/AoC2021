exports.sonarSweep = function (arr) {
  let count = 0
  for (let i=1; i<arr.length; i++) {
    if (arr[i] > arr[i-1]) {
      count++
    }
  }
  return count
}

exports.sonarSweepSliding = function (arr) {
  let count = 0
  let prev = arr[0] + arr[1] + arr[2]

  for (let i=1; i<arr.length-2; i++) {
    const current = arr[i] + arr[i+1] + arr[i+2]
    if (current > prev) count++
    prev = current
  }
  return count
}