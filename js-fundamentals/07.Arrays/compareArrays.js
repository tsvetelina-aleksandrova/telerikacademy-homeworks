function printComparison(args) {
    var firstLength = args[0].length,
        secondLength = args[1].length,
        result,
        i = 0;

    for(i = 0; i < firstLength && i < secondLength && !result; i += 1) {
        if (args[0][i] < args[1][i]) {
            result = '<';
        } else if (args[0][i] > args[1][i]) {
            result = '>';
        }
    }

    if (!result) {
        if (firstLength === secondLength) {
            result = '=';
        } else if (i < secondLength) {
            result = '<';
        } else {
            result = '>';
        }
    }

    console.log(result);
}
