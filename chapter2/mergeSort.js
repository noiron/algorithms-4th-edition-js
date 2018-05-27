/**
 * 自顶向下的归并排序
 * 《算法》 2.2.2 自顶向下的归并排序 P171/P271
 * 参考代码：算法2.4
 */

const Base = require('./Base')
const merge = require('./merge')

class MergeSort extends Base {

  static sort(a) {
    this.runSort(a, 0, a.length - 1)
  }

  // 将数组 a[lo..hi] 排序
  static runSort(a, lo, hi) {
    if (hi <= lo) return
    const mid = lo + Math.floor((hi - lo) / 2)
    this.runSort(a, lo, mid)
    this.runSort(a, mid + 1, hi)
    merge(a, lo, mid, hi)
  }
}

// const a = [ 76, 73, 25, 33, 25, 8, 81, 59, 88, 57, 19, 52, 83, 14, 69, 91, 5, 36, 73, 7 ];
// MergeSort.run(a);

module.exports = MergeSort
