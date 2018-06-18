/**
 * 快速排序
 * 《算法》 2.3 快速排序 P182/P288
 * 参考代码：算法2.5 快速排序 & 快速排序的切分
 * 
 * 算法思路：
 * 选定一个元素，将数组分成两个部分，左子数组不大于选定的元素，右子数组不小于选定的元素，
 * 递归调用以使左右两个数组有序。
 * 算法的关键在于数组的切分，将数组随机打乱后，选取 v = a[lo] 作为切分元素。从数组的左端开始
 * 扫描，找到一个大于等于 v 的元素；再从数组的右端开始扫描，找到一个小于等于 v 的元素；交换
 * 这两个元素的位置。重复以上过程直到左右指针相遇，然后交换切分元素 a[lo] 和左子数组最右侧的
 * 元素 a[j]。
 * 
 * TODO: 算法的改进：P189/P298 三向切分的快速排序
 */

const Base = require('./Base')
const shuffle = require('./../shuffle');

class Quick extends Base {

  static sort(a) {
    shuffle(a);
    this.runSort(a, 0, a.length - 1);
  }

  static runSort(a, lo, hi) {
    if (hi <= lo) return;
    const j = this.partition(a, lo, hi); // 切分
    this.runSort(a, lo, j - 1); // 将左半部分 a[lo .. j-1] 排序
    this.runSort(a, j + 1, hi); // 将右半部分 a[j+1 .. hi] 排序
  }

  // 将数组切分为 a[lo..i-1], a[i] 和 a[i+1..hi]
  static partition(a, lo, hi) {
    let i = lo;
    let j = hi + 1;
    const v = a[lo]; // 切分元素，即将会被排定的元素

    // 扫描左右，检查扫描是否结束并交换元素
    while (true) {
      while (this.less(a[++i], v)) {
        if (i === hi) break;
      }
      while (this.less(v, a[--j])) {
        if (j === lo) break;
      }
      if (i >= j) break;
      this.exch(a, i, j);
    }

    this.exch(a, lo, j); // 将 v=a[j] 放入正确的位置
    return j;
  }

}

// const a = [ 76, 73, 25, 33, 25, 8, 81, 59, 88, 57, 19, 52, 83, 14, 69, 91, 5, 36, 73, 7];
// Quick.run(a);

module.exports = Quick;
