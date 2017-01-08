function sort(args) {
    var n = args[0] | 0,
        sequence = args.slice(1).map(Number),
        swap;

    for (var i = 0; i < n - 1; i += 1) {
        for (var j = i + 1; j < n; j += 1) {
            if (sequence[j] < sequence[i]) {
                swap = sequence[i];
                sequence[i] = sequence[j];
                sequence[j] = swap;
            }
        }
    }

    for (var i = 0; i < n; i += 1) {
        console.log(sequence[i]);
    }
}
