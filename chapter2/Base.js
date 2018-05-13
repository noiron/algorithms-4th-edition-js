/**
 * 本文件参照 《算法（第四版）》 2.1 初级排序算法
 * P153 给出的 Example 类的 Java 代码改写
 */

class Base {
    constructor() {
    }

    
    // 将 a 进行排序，a 一般为一个数组
    static sort(a) {

    }

    static less(v, w) {
        return v < w;
    }

    // 交换数组a中下标为i,j的两个元素
    static exch(a, i, j) {
        const t = a[i];
        a[i] = a[j];
        a[j] = t;
    }

    // 打印数组
    static show(a) {
        let result = '';
        a.forEach(v => result+= (v + ' '));
        console.log(result);
    }

    // 测试数组元素是否有序
    static isSorted(a) {
        for (let i = 1; i < a.length; i++) {
            if (this.less(a[i], a[i-1])) {
                return false;
            }
        }
        return true;
    }

    static run(a) {
        this.sort(a);
        if (this.isSorted(a)) {
            console.log('a is sorted');
            this.show(a);
        } else {
            console.log('NOT sorted');
        }
    }
}

module.exports = Base;
