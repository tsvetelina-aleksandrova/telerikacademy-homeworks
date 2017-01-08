function solveQuadratic(args) {
    var a = args[0] * 1,
        b = args[1] * 1,
        c = args[2] * 1,
        determinant = b * b - 4 * a * c,
        delimiter = 2 * a;

    if (determinant > 0) {
        var roots = [
            (-b - Math.sqrt(determinant)) / delimiter,
            (Math.sqrt(determinant) - b) / delimiter
        ];
        return [
            'x1=' + Math.min(roots[0], roots[1]).toFixed(2),
            'x2=' + Math.max(roots[0], roots[1]).toFixed(2)
        ].join('; ');
    }

    if (!determinant) {
        var root = - b / delimiter;
        return 'x1=x2=' + root.toFixed(2);
    }

    return 'no real roots';
}
