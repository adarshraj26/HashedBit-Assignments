function correctWord(sentence, wrong, correct) {
    const regex = new RegExp("\\b" + wrong + "\\b", "gi");
    const correctedSentence = sentence.replace(regex, correct);
    return correctedSentence;
}

let sentence = "There are many potatos in this garden.";
let wrongWord = "potatos";
let crctWord = "potatoes";

let correctedSentence = correctWord(sentence, wrongWord, crctWord);
console.log(correctedSentence);
