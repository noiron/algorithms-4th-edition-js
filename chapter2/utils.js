// 生成一个给定长度的数组，其值为 [0, 100] 的随机整数
function generateRandomArray(n = 10) {
    const a = [];

    for (let i = 0; i < n; i++) {
        const rnd = Math.floor(Math.random() * 101);
        a.push(rnd);
    }

    return a;
}
