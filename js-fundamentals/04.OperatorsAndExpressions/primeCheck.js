function solve(args) {
    var checkInput = args[0] | 0,
        limit = Math.sqrt(checkInput);

    if (checkInput <= 0) {
        return false;
    }

    for (var i = 2; i <= limit; i+= 1) {
        if (!(checkInput % i)) {
            return false;
        }
    }

    return true;
}
