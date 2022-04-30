import { calcPriceWithTax } from '../src/helper/calc'

test('税込み計算8%', () => {
  expect(calcPriceWithTax(100, 0.08)).toBe(108)
})

test('税込み計算10%', () => {
  expect(calcPriceWithTax(100, 0.1)).toBe(110)
})

test('税込み計算0%', () => {
  expect(() => {
    return calcPriceWithTax(100, 0)
  }).toThrow()
})
