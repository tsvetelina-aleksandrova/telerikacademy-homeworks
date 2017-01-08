function solve(args) {
    var inputNumber = args[0] | 0,
        result = ((inputNumber >> 3) | 0) % 2;
    return result;
}
