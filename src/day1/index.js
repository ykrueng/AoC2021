exports.sonarSweep = a => a.reduce((p, c, i) => i === 0 ? 0 : c > a[i-1] ? ++p : p, 0)

exports.sonarSweepSliding = a => a.reduce((p, c, i) => i < 3 ? 0 : c > a[i-3] ? ++p : p)