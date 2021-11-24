import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// 创建一个NumbersCollection实例
const numbersCollection = new NumbersCollection([10, 5, -8, 0]);
const charactersCollection = new CharactersCollection('red'); 
const linkedList = new LinkedList(); 
linkedList.add(100);
linkedList.add(300);
linkedList.add(-50);
linkedList.add(0);

// 将numbersCollection实例在new Sorter(numbersCollection)传入, 进而创建出Sorter的实例
const sorter = new Sorter(numbersCollection);
const sorter2 = new Sorter(charactersCollection);
const sorter3 = new Sorter(linkedList);

// 调用实例sorter的sort()方法, 对创建实例sorter时传入的实例numbersCollection排序
sorter.sort();
sorter2.sort();
sorter3.sort();

// 调用了sorter.sort()排好序后, 打印numbersCollection实例的data属性, 即排好序后的数据
console.log(numbersCollection.data); // [ -8, 0, 5, 10 ]
console.log(charactersCollection.data); // der
linkedList.print(); // der