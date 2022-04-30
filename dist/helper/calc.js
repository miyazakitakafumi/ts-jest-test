"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcPriceWithTax = void 0;
const calcPriceWithTax = (price, tax) => {
    //   if (tax === 0) throw Error('0は指定できません')
    return price + price * tax;
};
exports.calcPriceWithTax = calcPriceWithTax;
