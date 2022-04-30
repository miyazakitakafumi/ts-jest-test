export const calcPriceWithTax = (price: number, tax: number): number => {
  if (tax === 0) throw Error('0は指定できません')
  return price + price * tax
}
