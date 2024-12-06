function normalizeArray(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    return arr.map(value => (value - min) / (max - min));
}

// Example usage
const data = [5, 10, 15, 20];
const normalizedData = normalizeArray(data);
console.log(normalizedData); // Output: [0, 0.25, 0.5, 0.75, 1]