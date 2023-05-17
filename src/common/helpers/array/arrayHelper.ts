class ArrayHelper {
  static createRange(start = 0, stop = 0, step = 1) {
    if (stop < start) {
      throw new Error("Start param can't be lower than stop param")
    } else if (step <= 0) {
      throw new Error("Step can't be lower than 1")
    }

    const length = (stop - start) / step + 1

    return Array.from({ length }, (_, i) => start + i * step)
  }
}

export default ArrayHelper
