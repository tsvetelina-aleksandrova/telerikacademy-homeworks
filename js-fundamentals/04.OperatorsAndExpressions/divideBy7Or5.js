function solve(args) {
    var inputNumber = args[0] | 0,
        canDivide = !(inputNumber % 5 || inputNumber % 7);

    return Boolean(canDivide) + ' ' + inputNumber;
}
