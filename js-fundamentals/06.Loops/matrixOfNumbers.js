function printMatrix(size) {
    var i = 1,
        result = '';

    while(i <= size) {
        var j = i;

        while(j - i < size) {
            result += j + ' ';
            j += 1;
        }

        result += '\n';
        i += 1;
    }

    console.log(result);
}
