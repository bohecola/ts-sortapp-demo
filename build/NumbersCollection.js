"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    // 加上get修饰符, 方法可以像属性一样使用numbers.length, 而不是numbers.length()
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex]; // 左 > 右, 先保存左侧元素
        this.data[leftIndex] = this.data[rightIndex]; // 左 > 右, 右侧元素向后退位
        this.data[rightIndex] = leftHand; // 左 > 右, 左侧元素向前进位
    }
}
exports.NumbersCollection = NumbersCollection;
