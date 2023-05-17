import { Chance } from 'chance'

import MockGenerator from './generator'

type TestMockProperties = {
  example1: string
  example2: string
}

const chance = new Chance()
const defaultValueMock = { example1: 'example1', example2: 'example2' }

class TestMockGenerator extends MockGenerator<TestMockProperties> {
  getOne(properties?: Partial<TestMockProperties>): TestMockProperties {
    return { ...defaultValueMock, ...properties }
  }
}

describe('MockGenerator', () => {
  describe('getOne', () => {
    it('should create an element', () => {
      const result = new TestMockGenerator().getOne()
      expect(result).toEqual(defaultValueMock)
    })

    it('should create an element changing property', () => {
      const valueToBeChanged = chance.word()
      const expectedValue = { ...defaultValueMock, example1: valueToBeChanged }
      const result = new TestMockGenerator().getOne({
        example1: valueToBeChanged
      })
      expect(result).toEqual(expectedValue)
    })
  })

  describe('getMultiples', () => {
    it('should create multiples elements', () => {
      const amount = chance.integer({ min: 1, max: 10 })
      const results = new TestMockGenerator().getMultiples(amount)

      expect(results).toHaveLength(amount)
      results.forEach((result) => expect(result).toEqual(defaultValueMock))
    })

    it('should create multiples elements changing property value', () => {
      const valueToBeChanged = chance.word()
      const expectedValue = { ...defaultValueMock, example2: valueToBeChanged }
      const amount = chance.integer({ min: 1, max: 10 })
      const results = new TestMockGenerator().getMultiples(amount, {
        example2: valueToBeChanged
      })

      expect(results).toHaveLength(amount)
      results.forEach((result) => expect(result).toEqual(expectedValue))
    })

    it('should create multiples elements changing property value only of indexes passed as arguments', () => {
      const valueToBeChanged = chance.word()
      const expectedValueChanged = {
        example1: 'example1',
        example2: valueToBeChanged
      }

      const amount = 3
      const results = new TestMockGenerator().getMultiples(
        amount,
        { example2: valueToBeChanged },
        [0, 1]
      )

      expect(results).toHaveLength(amount)
      expect(results[0]).toEqual(expectedValueChanged)
      expect(results[1]).toEqual(expectedValueChanged)
      expect(results[2]).toEqual(defaultValueMock)
    })
  })
})
