function solve(args) {
    var inputNumber = args[0] | 0,
        divided = inputNumber / Math.pow(10, 2),
        thirdDigit = divided % 10 | 0,
        isGoodThirdDigit = thirdDigit === 7,
        suffix = isGoodThirdDigit ? '' : ' ' + thirdDigit;
        result = Boolean(isGoodThirdDigit) + suffix;
    return result;
}
