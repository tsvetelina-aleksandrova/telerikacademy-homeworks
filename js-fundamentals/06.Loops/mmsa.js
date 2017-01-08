function findMMSA(numbers) {
    var min = 10000,
        max = -10000,
        sum = 0,
        count = 0;

    for(var arg of numbers) {
        var num = arg * 1;
        if (!isNaN(num)) {
            min = num < min ? num : min;
            max = num > max ? num : max;
            sum += num;
            count += 1;
        }
    }

    var result = [
        'min=' + min.toFixed(2),
        'max=' + max.toFixed(2),
        'sum=' + sum.toFixed(2),
        'avg=' + (sum / Math.max(1, count)).toFixed(2)
    ].join('\n');

    return result;
}
