function guessMultiplicationSign(args) {
    var a = args[0] * 1,
        b = args[1] * 1,
        c = args[2] * 1,
        sign;

    if (a === 0 || b === 0 || c === 0) {
        sign = 0;
    } else {
        var isOnlyNegativeA = (a < 0 && (b > 0 && c > 0)),
            isOnlyNegativeB = (b < 0 && (a > 0 && c > 0)),
            isOnlyNegativeC = (c < 0 && (a > 0 && b > 0)),
            areAllNegative = a < 0 && b < 0 && c < 0;

        if (isOnlyNegativeA || isOnlyNegativeB || isOnlyNegativeC || areAllNegative) {
            sign = '-';
        } else {
            sign = '+';
        }
    }

    return sign;
}
