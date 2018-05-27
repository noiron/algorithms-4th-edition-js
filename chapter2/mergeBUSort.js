/**
 * 自底向上的归并排序
 * 《算法》 2.2.3 自底向上的归并排序 P175/P277
 * 参考代码：P175/P277
 */

const Base = require('./Base')
const merge = require('./merge')

class MergeBU extends Base {

  static sort(a) {
    const len = a.length
    for (let sz = 1; sz < len; sz = sz * 2) {
      for (let lo = 0; lo <  len - sz; lo += sz * 2) {
        merge(a, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, len - 1))
      }
    }
  }
}

// const a = [ 76, 73, 25, 33, 25, 8, 81, 59, 88, 57, 19, 52, 83, 14, 69, 91, 5, 36, 73, 7 ];
// MergeBU.run(a);

module.exports = MergeBU
