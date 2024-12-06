function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

// Example usage
const text = "café";
const normalizedText = normalizeString(text);
console.log(normalizedText); // Output: "cafe"