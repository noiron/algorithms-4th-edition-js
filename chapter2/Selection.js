/**
 * 选择排序
 * 《算法》 2.1.2 选择排序 P155/P247
 * 参考代码：算法2.1 选择排序
 * 
 * 算法思路：
 * 找到数组中最小的元素，将其和数组的第一个元素交换位置；
 * 然后从剩余的元素的元素中找到最小元素，和数组的第二个元素交换位置；重复以上过程
 */

const Base = require('./Base')

class Selection extends Base {
    
    static sort(a) {
        const len = a.length;
        for (let i = 0; i < len; i++) {
            let min = i;
            for (let j = i + 1; j < len; j++) {
                if (this.less(a[j], a[min])) {
                    min = j;
                }
            }
            this.exch(a, i, min);
        }
    }
}

// const a = [ 76, 73, 25, 33, 25, 8, 81, 59, 88, 57, 19, 52, 83, 14, 69, 91, 5, 36, 73, 7 ];
// Selection.run(a);

module.exports = Selection;