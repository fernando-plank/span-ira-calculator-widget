import { ArrayHelper } from './'

describe('Array helpers', () => {
  describe('createRange', () => {
    it('should return array with zero when function is called without arguments', () => {
      const array = ArrayHelper.createRange()

      expect(array).toStrictEqual([0])
    })

    it('should return expected array when function is called with correct arguments', () => {
      const expectedArray = [0, 1, 2, 3, 4, 5]
      const array = ArrayHelper.createRange(0, 5)

      expect(array).toStrictEqual(expectedArray)
    })

    it('should throw an exception when "start" is lower than "stop"', () => {
      expect(() => ArrayHelper.createRange(5, 0)).toThrow(
        "Start param can't be lower than stop param"
      )
    })

    it('should throw an expection when "step" is lower than 1', () => {
      expect(() => ArrayHelper.createRange(0, 2, 0)).toThrow(
        "Step can't be lower than 1"
      )

      expect(() => ArrayHelper.createRange(0, 2, -2)).toThrow(
        "Step can't be lower than 1"
      )
    })
  })
})
