/**
 * 《算法》 2.4 优先队列
 * 参考代码：算法2.6 基于堆的优先队列 P202
 * 
 * 算法思路：
 * 优先队列支持两种操作：删除最大元素和插入元素
 * 当二叉树的每个结点都大于等于它的两个子节点时，被称为堆有序。
 * 二叉堆是一颗堆有序的完全二叉树，可用长度为 N+1 的数组 a 来表示，a[0] 为空，根节点在 a[1]。
 * 位置为 k 的节点的父节点的位置为 k/2 (向下取整)，子节点的位置是 2k 和 2k+1
 * 
 * 当某个节点比它的父节点大时，可通过上浮 swim 来调整，即不断交换其和父节点的位置，直到找到正确
 * 位置
 * 当某个节点比它的子节点小时，可通过下沉 sink 来调整，即通过和子节点中的较大者进行交换来调整
 * 
 * 插入元素：将该元素插在最后一个位置，此时可能大于其父节点，通过 swim 调整
 * 删除元素：对于二叉堆，其根元素即为最大元素，交换根元素和最后一个元素的位置，然后通过 sink 
 * 操作调整新的根元素的位置
 */


class MaxPQ {
  constructor(a) {
    // 如果传入数组，则用其来初始化
    if (Object.prototype.toString.call(a) === '[object Array]') {
      this.N = a.length;
      this.pq = [null];
      for (let i = 0; i < a.length; i++) {
        this.pq[i+1] = a[i];
      }
    } else {
      this.N = 0;
      this.pq = [null];
    }
  }

  isEmpty() {
    return this.N === 0;
  }

  size() {
    return this.N;
  }

  insert(v) {
    const N = ++this.N;
    this.pq[N] = v;
    this.swim(N);
  }

  delMax() {
    const max = this.pq[1];
    this.exch(1, this.N);
    this.pq[this.N] = null;
    this.N--;
    this.sink(1);
    return max;
  }

  less(i, j) {
    return this.pq[i] < this.pq[j];
  }

  exch(i, j) {
    const t = this.pq[i];
    this.pq[i] = this.pq[j];
    this.pq[j] = t;
  }

  swim(k) {
    while (k > 1 && this.less(Math.floor(k / 2), k)) {
      const parent = Math.floor(k / 2);
      this.exch(parent, k);
      k = parent;
    }
  }

  sink(k) {
    while (2 * k <= this.N) {
      let j = 2 * k;
      if (j < this.N && this.less(j, j + 1)) j++;
      if (!this.less(k, j)) break;
      this.exch(k, j);
      k = j;
    }
  }

}

// let p = new MaxPQ(['T', 'P', 'R', 'N', 'H', 'O', 'A', 'E', 'I', 'G']);
// p.insert('S');
// console.log(p.pq);

// p = new MaxPQ(['T', 'S', 'R', 'P', 'N', 'O', 'A', 'E', 'I', 'G', 'H']);
// p.delMax();
// console.log(p.pq);
