function countWords(paragraph) {
    const words = paragraph.split(/\s+/);
    return words.length;
}

const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.";
const wordCount = countWords(paragraph);
console.log("Number of words:", wordCount);
