function findFrequency(str) {
    if (typeof str === 'string' && str.length) {
        let map = {};
        for (let c of str) {
            if (map[c]) {
                map[c]++;
            } else {
                map[c] = 1;
            }
        }
        return map;
    }
    return false;
}