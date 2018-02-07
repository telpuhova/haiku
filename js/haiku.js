export class Haiku {
  constructor(poem) {
    this.poem = poem;
  }

  check() {
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
}
 // exports.haikuModule=Haiku;
