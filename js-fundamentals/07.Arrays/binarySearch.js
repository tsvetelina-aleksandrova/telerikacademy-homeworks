function find(args) {
    var nums = args.map(Number),
        n = nums[0],
        x = nums[n + 1],
        sequence = nums.splice(1, n),
        left = 0,
        right = n - 1,
        middle,
        index = -1;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        if (sequence[middle] === x) {
            index = middle;
            break;
        }
        if (sequence[middle] < x) {
            left = middle + 1;
        } else {
           right = middle - 1;
        }
    }

    console.log(index);
}
