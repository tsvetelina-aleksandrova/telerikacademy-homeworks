function solve(args) {
    const insideLabel = 'inside',
        outsideLabel = 'outside',
        center = {x: 1, y: 1},
        radius = 1.5,
        rect = {top: -1, left: -1, width: 6, height: 2},
        point = {x: args[0] * 1, y: args[1] * 1};

    var circleDist = Math.sqrt(Math.pow(point.x - center.x, 2) + Math.pow(point.y - center.y, 2)),
        rectLimit = {x: rect.left + rect.width, y: rect.top + rect.height},
        rectContainX = rect.left <= point.x && point.x <= rectLimit.x,
        rectContainY = rect.top <= point.y && point.y <= rectLimit.y,
        circleLabel = (circleDist <= radius ? insideLabel : outsideLabel) + ' circle',
        rectLabel = (rectContainX && rectContainY ? insideLabel : outsideLabel) + ' rectangle';

    return circleLabel + ' ' + rectLabel;
}
