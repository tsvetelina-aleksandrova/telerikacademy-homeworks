function solve(args) {
    var inputNumber = args[0] | 0,
        isEven = !(inputNumber % 2),
        prefix = isEven ? 'even' : 'odd';

    return prefix + ' ' + inputNumber;
}
