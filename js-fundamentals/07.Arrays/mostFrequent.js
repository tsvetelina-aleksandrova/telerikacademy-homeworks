function mostFrequent(args) {
    var n = args[0] | 0,
        sequence = args.slice(1).map(Number),
        checked = [],
        maxTimes = 1,
        maxElem,
        times;

    for (var i = 0; i < n - 1; i += 1) {
        if (checked.indexOf(sequence[i]) === -1) {
            times = 1;
            checked.push(sequence[i]);
            for (var j = i + 1; j < n; j += 1) {
                if (sequence[j] === sequence[i]) {
                    times += 1;
                }
            }
            if (times > maxTimes) {
                maxTimes = times;
                maxElem = sequence[i];
            }
        }
    }

    console.log([maxElem, ' (', maxTimes, ' times)'].join(''));
}
