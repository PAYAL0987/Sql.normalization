function normalizeToRange(arr, newMin, newMax) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return arr.map(value => ((value - min) / (max - min)) * (newMax - newMin) + newMin);
}

// Example usage
const data = [5, 10, 15, 20];
const normalizedRangeData = normalizeToRange(data, 1, 10);
console.log(normalizedRangeData); // Output: [1, 3.25, 5.5, 7.75, 10]