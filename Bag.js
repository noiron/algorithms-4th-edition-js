class Bag {

  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}


module.exports = Bag;

