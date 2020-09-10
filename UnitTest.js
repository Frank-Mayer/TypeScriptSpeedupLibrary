import { HashTable, SortedList, Stack, Quere } from "./out/speedup.js";

const test = (operation, expectation) => {
  let result;
  if (typeof operation === "function") {
    result = operation();
  } else {
    result = operation;
  }
  console.count("Test");
  console.assert(result === expectation, [
    `value is ${result}, but sould be ${expectation}`,
  ]);
};

const hashTable = new HashTable(32);
hashTable.set("meep", "12345");
hashTable.set(33, 4204);
hashTable.set("mep", "lfnrnrg");
test(hashTable.get("meep"), "12345");
test(hashTable.length, 3);
test(hashTable.pop(33), 4204);
test(hashTable.length, 2);

const sortedList = new SortedList();
sortedList.add("tux");
sortedList.add("seehorse");
sortedList.add("apple");
test(sortedList.remove("seehorse"), true);
test(sortedList.remove("bear"), false);
test(sortedList.indexOf("apple"), 0);

const stack = new Stack();
stack.push("meep");
test(stack.peek(), "meep");
test(stack.pop(), "meep");
test(stack.length, 0);

const quere = new Quere();
quere.enqueue("dog");
quere.enqueue("cat");
quere.enqueue("bird");
test(quere.dequeue(), "dog");
test(quere.dequeue(), "cat");
test(quere.dequeue(), "bird");