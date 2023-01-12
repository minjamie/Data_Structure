 //1. PriorityQueue format Class
export default class PriorityQueue {
    #list = []
    #capacity = null
    constructor(capacity) {
        this.#capacity = Math.max(Number(capacity), 0) || null
    }
    enqueue(item, priority = 0) {
        priority = Math.max(Number(priority), 0)
        const element = { item, priority }
        if (
            this.isEmpty || 
            element.priority >= this.#list[this.size -1].priority
        )
    }

    dequeue(item) {
        return this.items.shift(item);
    }

    peek() {
        // 실제 항목 목록에서 제거하지 않고 첫 번째 항목 보여주거나 반환    
        return this.items[0]
    }
    
    get size() {
        return this.#list.length
    }

    get isEmpty() {
        return this.size() === 0
    }

    
}

//2. Queue format Function
function Queue() {
  collection = [];
  this.print = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    collection.push(element);
  };
  this.dequeue = function () {
    collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let q = new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue("a");
console.log(q.front());
q.print();
