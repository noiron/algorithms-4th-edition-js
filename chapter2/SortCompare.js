/**
 * 对于选择排序和插入排序算法的比较
 * 《算法》2.1.5 比较两种排序算法
 * 参考代码：P161/P254 SortCompare
 */

const Insertion = require('./Insertion');
const Selection = require('./Selection');
const Shell = require('./Shell');
const Merge = require('./mergeSort')
const MergeBU = require('./mergeBUSort')

function SortCompare(alg1, alg2, len, T) {
    const t1 = timeRandomInput(alg1, len, T);
    const t2 = timeRandomInput(alg2, len, T);

    console.log(alg1, '  ', t1);
    console.log(alg2, '  ', t2);
    console.log(t2 / t1);
}

// 使用算法 alg 将 T 个长度为 len 的数组排序
function timeRandomInput(alg, len, T) {
  let total = 0
  const a = new Array(len)
  for (let t = 0; t < T; t++) {
    for (let i = 0; i < len; i++) {
      a[i] = Math.random()
    }
    total += time(alg, a)
  }
  return total
}

// 记录使用算法 alg 对数组 a 进行排序所用的时间
function time(alg, a) {
    const start = new Date();
    if (alg === 'Insertion') {
        Insertion.sort(a);
    }
    if (alg === 'Selection') {
        Selection.sort(a);
    }
    if (alg === 'Shell') {
        Shell.sort(a);
    }
    if (alg === 'Merge') {
        Merge.sort(a)
    }
    if (alg === 'MergeBU') {
        MergeBU.sort(a)
    }
    const end = new Date();
    return end.getTime() - start.getTime();
}

// 比较插入排序和选择排序
// SortCompare('Insertion', 'Selection',  1000, 100);

// 比较希尔排序和插入排序
// SortCompare('Shell', 'Insertion', 10000, 100);

// 比较插入排序和归并排序
// SortCompare('Insertion', 'Merge', 10000, 100);

// 比较归并排序
SortCompare('Merge', 'MergeBU', 100000, 100)
