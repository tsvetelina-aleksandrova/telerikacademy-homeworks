function printNumbers(args) {
    var num = args[0] | 0,
        result = '';
    for(var i = 1; i <= num; i += 1) {
        result += i + ' ';
    }
    return result;
}
