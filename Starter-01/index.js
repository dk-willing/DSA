//Create a custom Array

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(newValue) {
    this.data[this.length] = newValue;
    this.length++;
    return this.length;
  }

  pop() {
    const lastValue = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastValue;
  }

  shift() {
    const firstItem = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  get(index) {
    if (index > this.length - 1) {
      return `Index out of bounds`;
    }
    return this.data[index];
  }

  deleteByIndex(index) {
    const valueToDelete = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return valueToDelete;
  }
}

const newArr = new MyArray();
newArr.push("apple"); // 0
newArr.push("banana"); // 1
newArr.push("orange"); // 2
newArr.push("pear"); // 3
newArr.push("mango"); // 4
newArr.push("juice"); // 5

newArr.deleteByIndex(4);

// newArr.shift();
console.log(newArr);
