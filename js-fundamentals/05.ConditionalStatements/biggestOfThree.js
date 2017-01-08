function biggestOfThree(args) {
    var a = args[0] * 1,
        b = args[1] * 1,
        c = args[2] * 1,
        greatest;

    if (a > b) {
        if (a > c) {
            greatest = a;
        } else {
            greatest = c;
        }
    } else {
        if (b > c) {
            greatest = b;
        } else {
            greatest = c;
        }
    }

    return greatest;
}
