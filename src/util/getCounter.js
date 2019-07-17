export const getCounter = (initial = 0) => (value => () => value++)(initial)
