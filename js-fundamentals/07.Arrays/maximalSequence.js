function maximalSequence (args) {
    var n = args[0] | 0,
        sequence = args.slice(1).map(Number),
        maxLength = 1,
        currentLength = 1;

    for (var i = 0; i < n - 1; i += 1) {
        currentLength = sequence[i] === sequence[i + 1] ? currentLength + 1 : 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    console.log(maxLength);
}
