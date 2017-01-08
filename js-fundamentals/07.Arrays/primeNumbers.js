function sieve (args) {
    var n = args[0] | 0,
        rootn = Math.sqrt(n);

    for (var i = n; i > 1; i -= 1) {
        var isPrime = true;
        for (var j = 2; j <= rootn; j += 1) {
            if (!(i % j)) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
            return;
        }
    }
}
