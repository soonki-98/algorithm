const solution = (table, lan, pre) => {
    const result = [];
    table = table.map(el => el.split(" "));
    cal(result, table, lan, pre);
    return sorted(result)
}

const scoreCal = (t, l, p) => {
    return t.includes(l) ? (6 - t.indexOf(l)) * p : 0;
}

const sorted = (r) => {
    return r.sort((a, b) => b[1] - a[1]).filter(el => el[1] === r[0][1]).sort()[0][0];
}

const cal = (r, t, l, p) => {
    for (let i in t) {
        let score = 0;
        for (let j in l) {
            score += scoreCal(t[i], l[j], p[j]);
        }
        r.push([t[i][0], score]);
    }
    return r;
}
