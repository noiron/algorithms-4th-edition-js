/**
 * 插入排序
 * 《算法》 2.1.3 插入排序 P157/P250
 * 参考代码：算法2.2 插入排序
 * 
 * 算法思路：
 * 和打牌时的整理方法类似，将每一张牌插入到已有序的牌中的适当位置
 */

const Base = require('./Base')

class Insertion extends Base {
    
    static sort(a) {
        const len = a.length;
        for (let i = 1; i < len; i++) {
            for (let j = i; j > 0 && this.less(a[j], a[j - 1]); j--) {
                this.exch(a, j, j-1);
            }
        }
    }
}

// const a = [ 76, 73, 25, 33, 25, 8, 81, 59, 88, 57, 19, 52, 83, 14, 69, 91, 5, 36, 73, 7 ];
// Insertion.run(a);

module.exports = Insertion;
