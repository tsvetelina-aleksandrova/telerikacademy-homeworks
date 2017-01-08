function solve(args) {
    var sideA = args[0] * 1,
        sideB = args[1] * 1,
        height = args[2] * 1,
        area = (sideA + sideB) * height / 2;
    return area.toFixed(7);
}
