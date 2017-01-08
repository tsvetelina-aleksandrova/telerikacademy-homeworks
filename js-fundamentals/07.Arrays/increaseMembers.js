function printArray(arg) {
    var size = +arg[0],
        result = new Array(size);

    for(var i = 0; i < size; i += 1) {
        result[i] = i * 5;
    }

    console.log(result.join('\n'));
}
