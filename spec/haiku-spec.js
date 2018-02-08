// var Haiku = require('./../js/haiku.js').haikuModule;
import { Haiku } from './../js/haiku.js';
import { HaikuCreator } from './../js/haiku-creator.js';

describe('Haiku', function() {
  // it('should return true or false', function(){
  //   let poem = `hello
  //   how are you
  //   doing well`;
  //   let notPoem = `this is
  //   not a haiku
  //   because
  //   it has
  //   more lines`;
  //   let sample1 = new Haiku(poem);
  //   let sample2 = new Haiku(notPoem);
  //   expect(sample1.checkLines()).toEqual(true);
  //   expect(sample2.checkLines()).toEqual(false);
  // });

  it('should check number of syllables correctly', function(){
    let poem = `In a pouch I grow,
    On a southern continent
    Strange creatures I know.`
    let lineOneFail = `In a pouch I grow alot,
    On a southern continent
    Strange creatures I know.`
    let lineTwoFail =`In a pouch I grow,
    On a big southern continent
    Strange creatures I know.`
    let lineThreeFail = `In a pouch I grow,
    On a southern continent
    Strange creatures I know hi.`
    let notPoem = `I am first with five
    Then seven in the middle
    Five again to end.`
    let sample1 = new Haiku(poem);
    let sample2 = new Haiku(lineOneFail);
    let sample3 = new Haiku(lineTwoFail);
    let sample4 = new Haiku(lineThreeFail);
    let sample5 = new Haiku(notPoem);
    expect(sample1.checkSyllables()).toEqual(true);
    // expect(sample2.checkSyllables()).toEqual(false);
    // expect(sample3.checkSyllables()).toEqual(false);
    // expect(sample4.checkSyllables()).toEqual(false);
    // expect(sample5.checkSyllables()).toEqual(false);
  });
});

// describe('haiku-creator', function() {
//   it('should check the createBase', function() {
//     let sample = new HaikuCreator();
//     expect(typeof sample.createBase()).toEqual("string");
//     expect(sample.createBase()).not.toEqual("");
//   })
//
//   it('should check the addAdverb', function() {
//     let sample = new HaikuCreator();
//     expect(typeof sample.addAdverb("mountain floats", 2)).toEqual("string");
//     expect(sample.addAdverb("mountain floats", 2)).not.toEqual("mountain floats");
//   })
//
//   it('should check the addAdjective', function() {
//     let sample = new HaikuCreator();
//     expect(typeof sample.addAdjective("mountain floats", 2)).toEqual("string");
//     expect(sample.addAdjective("mountain floats", 2)).not.toEqual("mountain floats");
//   })
//
//   it('should check create',function() {
//     let sample = new HaikuCreator();
//     let poem1 = sample.create();
//     let poem = new Haiku(poem1);
//     expect(typeof poem1).toEqual("string");
//     expect(poem.check()).toEqual(true);
//   })
// })
