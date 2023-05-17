import { ArrayHelper } from '@common/helpers/array'

abstract class MockGenerator<MockType> {
  abstract getOne(properties?: Partial<MockType>): MockType

  getMultiples(
    amount: number,
    properties?: Partial<MockType>,
    changeOnlyThoseIndexes: number[] = []
  ): MockType[] {
    if (amount < 1)
      throw new Error('The "amount" value need to be bigger than 0')

    const shouldChangeOnlySomeIndexes = changeOnlyThoseIndexes.length > 0

    const changeOnlyThoseIndexesSet = new Set()
    changeOnlyThoseIndexes.forEach((index) =>
      changeOnlyThoseIndexesSet.add(index)
    )

    return ArrayHelper.createRange(0, amount - 1).map((_, index) => {
      if (!shouldChangeOnlySomeIndexes) {
        return this.getOne(properties)
      }

      if (changeOnlyThoseIndexesSet.has(index)) {
        return this.getOne(properties)
      }

      return this.getOne()
    })
  }
}

export default MockGenerator
