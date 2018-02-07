// var Haiku = require('./../js/haiku.js').haikuModule;
import { Haiku } from './../js/haiku.js';

describe('Haiku', function() {
  it('should return true or false', function(){
    var poem = `hello
    how are you
    doing well`;
    var notPoem = `this is
    not a haiku
    because
    it has
    more lines`;
    var sample1 = new Haiku(poem);
    var sample2 = new Haiku(notPoem);
    expect(sample1.check()).toEqual(true);
    expect(sample2.check()).toEqual(false);
  });


});
