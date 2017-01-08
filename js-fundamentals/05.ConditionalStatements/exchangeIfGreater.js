function exchange(args) {
    var a = args[0] * 1,
        b = args[1] * 1;

    if (a > b) {
        var swap = a;
        a = b;
        b = swap;
    }

    return a + ' ' + b;
}
