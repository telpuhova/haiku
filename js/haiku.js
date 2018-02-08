export class Haiku {
  constructor(poem) {
    this.poem = poem;
  }

  check() {
    if (this.checkLines()) {
      if (this.checkSyllables()) {
        return true;
      }
    }
    return false;
  }

  checkLines() {
    let lines = this.poem.split("");
    let count = 0;
    for (let i = 0; i < lines.length; i++){
      if (lines[i] === '\n') {
        count = count + 1;
      }
    }
    if (count === 2) {
      return true;
    } else {
      return false;
    }
  }

  checkSyllables() {
    // debugger;

    this.poem = this.poem.toLowerCase();
    const vowels = ['a', 'e', 'y', 'u', 'i', 'o'];
    const exceptions = ['s', 'c', 'x', 'g', 'z'];
    let lines = this.poem.split("\n");

    let wordSliced = "";
    const requiredAmountOfSyllables = [5, 7, 5];
    for (let i=0; i<lines.length; i++) {
      let syllables = 0;
      // console.log(lines[i]);
      let words = lines[i].split(" ");
      for (let j=0; j<words.length; j++) {
        // console.log(words[j]);
        wordSliced = words[j];
        if (words[j].endsWith("less")) {
          syllables = syllables + 1;
          wordSliced = words[j].slice(0, (words[j].length - 4));
        }
        if (words[j].endsWith("ful")) {
          syllables = syllables + 1;
          wordSliced = words[j].slice(0, (words[j].length - 3));
        }
        // old words, where le sounds like an 'el'
        if (words[j].endsWith("ble")) {
          syllables =syllables + 1;
        }
        // } else if (words[j].endsWith("e")) {// silent e at the end of a word
        //   wordSliced = words[j].slice(0, (words[j].length - 1));
        // }
        // plural form with a silent e
        if (words[j].endsWith("es")) {
          if (!exceptions.includes(words[j].charAt(words[j].length - 3))) {
            wordSliced = words[j].slice(0, (words[j].length - 2));
          }
        }
        let letters = wordSliced.split("");
        // console.log(letters);
        let isPreviousLetterAVowel = false;
        let syllablesInAWord = 0;
        for (let k=0; k<letters.length; k++) {

          if (vowels.includes(letters[k]) && (isPreviousLetterAVowel === false)) {
            // console.log("if: vowel; f=false");
            isPreviousLetterAVowel = true;
            syllables = syllables + 1;
            syllablesInAWord = syllablesInAWord + 1;
          } else if (!vowels.includes(letters[k])) {
            // console.log("if: consonant;");
            isPreviousLetterAVowel = false;
          } else {

          }
        }
        if (words[j].endsWith("e") && (syllablesInAWord > 1)) {// silent e at the end of a word, accountong for "THE"
          syllables = syllables - 1;
        }
        console.log(words[j] + " - " + syllablesInAWord);
      }
      console.log((i+1) + " - " + syllables);
      if (syllables != requiredAmountOfSyllables[i]) {
        return false;
      }

    }
    return true;
  }
}
 // exports.haikuModule=Haiku;
