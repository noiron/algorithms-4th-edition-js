/**
 * 希尔排序
 * 《算法》2.1.6 希尔排序
 * 参考代码：P163/P257 算法2.3 希尔排序
 */

const Base = require('./Base')

class Shell extends Base {
    static sort(a) {
        let len = a.length;
        let h = 1;

        while (h < len / 3) {
            h = 3 * h + 1; // 1, 4, 13, 40, 121, 364, 1093...
        }
        while (h >= 1) {
            for (let i = h; i < len; i++) {
                for (let j = i; j >= h && this.less(a[j], a[j-h]); j -= h) {
                    this.exch(a, j, j-h);
                }
            }
            h = Math.floor(h / 3);
        }

    } 
}

// const a = [ 76, 73, 25, 33, 25, 8, 81, 59, 88, 57, 19, 52, 83, 14, 69, 91, 5, 36, 73, 7 ];
// Shell.run(a);

module.exports = Shell;
