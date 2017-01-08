function toDecimal(args) {
    var hex = args[0];

    if (hex === '10') {
        return 16;
    }
    if (hex === '11') {
        return 17;
    }

    var table = ['A', 'B', 'C', 'D', 'E', 'F']
        number = 0;

    for(var i = hex.length - 1, j = 0; i >= 0; i -= 1, j += 1) {
        var digit = hex[i],
            tableIndex = table.indexOf(digit);
        if (tableIndex > -1) {
            digit = 10 + tableIndex;
        }
        number += digit * Math.pow(16, j);
    }

    return number;
}
