function solve(args) {
    var width = args[0] * 1,
        height = args[1] * 1,
        area = width * height,
        perimeter = 2 * width + 2 * height;

    return area.toFixed(2) + ' ' + perimeter.toFixed(2);
}
