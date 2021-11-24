import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  // 加上get修饰符, 方法可以像属性一样使用numbers.length, 而不是numbers.length()
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number):boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];          // 左 > 右, 先保存左侧元素
    this.data[leftIndex] = this.data[rightIndex];   // 左 > 右, 右侧元素向后退位
    this.data[rightIndex] = leftHand;               // 左 > 右, 左侧元素向前进位
  }
}