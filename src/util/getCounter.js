module.exports.getCounter = (initial = 0) => (value => () => value++)(initial)
