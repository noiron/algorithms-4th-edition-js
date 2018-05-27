/**
 * 原地归并的抽象方法
 * 《算法》2.2 归并排序
 * 参考代码：P170/P270 原地归并的抽象方法
 */

/**
 * 将 a[lo..mid] 和 a[mid+1..hi] 归并
 */
function merge(a, lo, mid, hi) {

  // 将 a[lo..hi] 复制到 aux[lo..hi]
  const aux = []
  for (let k = lo; k < hi; k++) {
    aux[k] = a[k];
  }

  let i = lo
  let j = mid + 1
  // 归并回到 a[lo..hi]
  for (let k = lo; k <= hi; k++) {
    if (i > mid) a[k] = aux[j++]       // 左半边取尽
    else if (j > hi) a[k] = aux[i++]   // 右半边取尽
    else if (aux[i] > aux[j]) a[k] = aux[j++]  // TODO: 使用 less 函数
    else a[k] = aux[i++]
  }
}

// a = [-10, 1, 5, 6,  0, 3, 4, 9]
// merge(a, 0, 3, 7)
// console.log(a)

module.exports = merge
