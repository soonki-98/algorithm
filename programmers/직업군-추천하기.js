function solution(table, lan, pre) {
    const result = [];
    table = table.map(el => el.split(" "));
    for (let i in table) {
        let score = 0;
        for (let j in lan) {
            if (table[i].includes(lan[j])) score += Math.abs(table[i].indexOf(lan[j]) - 6) * pre[j];
        }
        result.push([table[i][0], score]);
    }
    return result.sort((a, b) => b[1] - a[1]).filter(el => el[1] === result[0][1]).sort()[0][0];
}