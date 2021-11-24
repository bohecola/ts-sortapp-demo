// 节点, 一般来讲单独再写一个文件，定义节点的结构
// 这里节点只在链表中使用, 不会在多个地方使用
class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  // 链表头
  head: Node | null = null;

  // 添加
  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {   // head不存在时
      this.head = node; // 新节点赋值给head
      return;
    }

    // tail从head开始向后查找next为null的节点
    let tail = this.head;

    // tail.next === null, 得到最终的节点,退出循环
    while (tail.next) {
      tail = tail.next
    }

    // 最终节点的next, 指向一个新的节点
    tail.next = node;
  }

  // 链表长度
  get length(): number {
    if (!this.head) { // head不存在时
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) { // head不存在时
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    // tail从head开始向后查找
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      
      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  // 乞丐版链表交换, 只交换value  达到节点交换的效果
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;   // 左 > 右, 先保存左侧元素
    leftNode.data = rightNode.data;   // 左 > 右, 右侧元素向后退位
    rightNode.data = leftHand;        // 左 > 右, 左侧元素向前进位
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}