
import { Haiku } from './../js/haiku.js';
export class HaikuCreator {
  constructor() {
    this.haiku = "";

    // 0-5 1 syll
    // 5-10 2 syll
    // 10-15 3 syll
    this.nouns = ["life", "heart", "king", "dog", "pond", "autumn", "sunset", "moonlight", "water", "mountain", "tenderness", "happiness", "adventure", "energy", "melody"];
    //no 3 syll words
    this.verbs = ["runs", "floats", "sings", "creeps", "moves", "travels", "begins", "remains", "adores", "follows"];
    this.adjectives = ["cold", "warm", "dark", "light", "small", "dancing", "changing", "breaking", "swaying", "silver", "beautiful", "courageous", "natural", "different", "lovable"];
    this.adverbs = ["high", "low", "deep", "late", "high", "softly", "lightly", "swaying", "away", "upward", "balancing", "forever", "easily", "endlessly", "honestly"];
    this.prepositions = [];
  }



  createBase() {
    let randomNounNumber = Math.floor(Math.random() * 15);
    let randomVerbNumber = Math.floor(Math.random() * 10);
    let haikuLine = "";
    haikuLine = this.nouns[randomNounNumber] + " " +this.verbs[randomVerbNumber];
    console.log(haikuLine);
    return haikuLine;
  }

  addAdjective(line, syllablesNeeded) {
    let randomNumberFromZeroToFive = Math.floor(Math.random() * 5);
    let randomAdjectiveNumber = randomNumberFromZeroToFive + (syllablesNeeded - 1) * 5;
    line = this.adjectives[randomAdjectiveNumber] + " " + line;
    console.log("---------------" + line);
    console.log(syllablesNeeded + " -- " + this.adjectives[randomAdjectiveNumber]);
    return line;
  }

  addAdverb(line, syllablesNeeded) {
    let randomNumberFromZeroToFive = Math.floor(Math.random() * 5);
    let randomAdverbNumber = randomNumberFromZeroToFive + (syllablesNeeded - 1) * 5;
    line = line + " " + this.adverbs[randomAdverbNumber];
    console.log("---------------" + line);
    console.log(syllablesNeeded + " -- " + this.adverbs[randomAdverbNumber]);
    return line;
  }

  create() {
    const requiredAmountOfSyllables = [5, 7, 5];
    let haiku = new Haiku;
    for (let i=0; i<3; i++){
      let line = "";
      line = line + this.createBase();

      let syllablesNeeded = requiredAmountOfSyllables[i] - haiku.checkSyllablesInALine(line);

      if (syllablesNeeded > 0) {
        let randomZeroOrOne = Math.floor(Math.random() * 2); // decide if we will get an adjective or an adverb

        if (syllablesNeeded <= 3) { //adds extra word only ONCE
          if (randomZeroOrOne) {
            line = this.addAdjective(line, syllablesNeeded);
          } else {
            line = this.addAdverb(line, syllablesNeeded);
          }

        } else if (syllablesNeeded > 3) { //adds extra word TWICE
          if (randomZeroOrOne) {
            line = this.addAdjective(line, 3);
          } else {
            line = this.addAdverb(line, 3);
          }
          syllablesNeeded = requiredAmountOfSyllables[i] - haiku.checkSyllablesInALine(line);
          if (randomZeroOrOne) {
            line = this.addAdverb(line, syllablesNeeded);
          } else {
            line = this.addAdjective(line, syllablesNeeded);
          }
        }
      }

      //line is ready
      this.haiku = this.haiku + line + '\n';
    }
    this.haiku = this.haiku.slice(0, this.haiku.length - 1);
    console.log(this.haiku);
    return this.haiku;
  }
}
