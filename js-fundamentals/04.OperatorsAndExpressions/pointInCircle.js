function solve(args) {
    var center = {x: 0, y: 0},
        radius = 2,
        point = {x: args[0] * 1, y: args[1] * 1},
        pointRelative = {x: point.x - center.x, y: point.y - center.y},
        distance = Math.sqrt(Math.pow(pointRelative.x, 2) + Math.pow(pointRelative.y, 2)),
        label = distance <= radius ? 'yes' : 'no',
        result = label + ' ' + distance.toFixed(2);
    return result;
}
