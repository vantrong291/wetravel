export const runAfter = (func, time) => {
  return setTimeout(() => {
    func()
  }, time)
}
