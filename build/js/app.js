(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HaikuCreator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _haiku = require("./../js/haiku.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HaikuCreator = exports.HaikuCreator = function () {
  function HaikuCreator() {
    _classCallCheck(this, HaikuCreator);

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

  _createClass(HaikuCreator, [{
    key: "createBase",
    value: function createBase() {
      var randomNounNumber = Math.floor(Math.random() * 15);
      var randomVerbNumber = Math.floor(Math.random() * 10);
      var haikuLine = "";
      haikuLine = this.nouns[randomNounNumber] + " " + this.verbs[randomVerbNumber];
      console.log(haikuLine);
      return haikuLine;
    }
  }, {
    key: "addAdjective",
    value: function addAdjective(line, syllablesNeeded) {
      var randomNumberFromZeroToFive = Math.floor(Math.random() * 5);
      var randomAdjectiveNumber = randomNumberFromZeroToFive + (syllablesNeeded - 1) * 5;
      line = this.adjectives[randomAdjectiveNumber] + " " + line;
      console.log("---------------" + line);
      console.log(syllablesNeeded + " -- " + this.adjectives[randomAdjectiveNumber]);
      return line;
    }
  }, {
    key: "addAdverb",
    value: function addAdverb(line, syllablesNeeded) {
      var randomNumberFromZeroToFive = Math.floor(Math.random() * 5);
      var randomAdverbNumber = randomNumberFromZeroToFive + (syllablesNeeded - 1) * 5;
      line = line + " " + this.adverbs[randomAdverbNumber];
      console.log("---------------" + line);
      console.log(syllablesNeeded + " -- " + this.adverbs[randomAdverbNumber]);
      return line;
    }
  }, {
    key: "create",
    value: function create() {
      var requiredAmountOfSyllables = [5, 7, 5];
      var haiku = new _haiku.Haiku();
      for (var i = 0; i < 3; i++) {
        var line = "";
        line = line + this.createBase();

        var syllablesNeeded = requiredAmountOfSyllables[i] - haiku.checkSyllablesInALine(line);

        if (syllablesNeeded > 0) {
          var randomZeroOrOne = Math.floor(Math.random() * 2); // decide if we will get an adjective or an adverb

          if (syllablesNeeded <= 3) {
            //adds extra word only ONCE
            if (randomZeroOrOne) {
              line = this.addAdjective(line, syllablesNeeded);
            } else {
              line = this.addAdverb(line, syllablesNeeded);
            }
          } else if (syllablesNeeded > 3) {
            //adds extra word TWICE
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
  }]);

  return HaikuCreator;
}();

},{"./../js/haiku.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Haiku = exports.Haiku = function () {
  function Haiku(poem) {
    _classCallCheck(this, Haiku);

    this.poem = poem;
  }

  _createClass(Haiku, [{
    key: 'check',
    value: function check() {
      if (this.checkLines()) {
        if (this.checkSyllables()) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'checkLines',
    value: function checkLines() {
      this.poem = this.poem.trim();
      var lines = this.poem.split("");
      var count = 0;
      for (var i = 0; i < lines.length; i++) {
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
  }, {
    key: 'checkSyllablesInALine',
    value: function checkSyllablesInALine(line) {

      var vowels = ['a', 'e', 'y', 'u', 'i', 'o'];
      var exceptions = ['s', 'c', 'x', 'g', 'z'];
      var wordSliced = "";

      var syllables = 0;
      // console.log(lines[i]);
      var words = line.split(" ");
      for (var j = 0; j < words.length; j++) {
        // console.log(words[j]);
        wordSliced = words[j];
        if (words[j].endsWith("less")) {
          syllables = syllables + 1;
          wordSliced = words[j].slice(0, words[j].length - 4);
        }
        if (words[j].endsWith("ful")) {
          syllables = syllables + 1;
          wordSliced = words[j].slice(0, words[j].length - 3);
        }
        // old words, where le sounds like an 'el'
        if (words[j].endsWith("ble")) {
          syllables = syllables + 1;
        }
        if (words[j].endsWith("ing") && vowels.includes(words[j].charAt(words[j].length - 4))) {
          syllables = syllables + 1;
        }
        // console.log("helloo - " + vowels);
        // } else if (words[j].endsWith("e")) {// silent e at the end of a word
        //   wordSliced = words[j].slice(0, (words[j].length - 1));
        // }
        // plural form with a silent e
        if (words[j].endsWith("es")) {
          if (!exceptions.includes(words[j].charAt(words[j].length - 3))) {
            wordSliced = words[j].slice(0, words[j].length - 2);
          }
        }
        var letters = wordSliced.split("");
        // console.log(letters);
        var isPreviousLetterAVowel = false;
        var syllablesInAWord = 0;
        for (var k = 0; k < letters.length; k++) {

          if (vowels.includes(letters[k]) && isPreviousLetterAVowel === false) {
            // console.log("if: vowel; f=false");
            isPreviousLetterAVowel = true;
            syllables = syllables + 1;
            syllablesInAWord = syllablesInAWord + 1;
          } else if (!vowels.includes(letters[k])) {
            // console.log("if: consonant;");
            isPreviousLetterAVowel = false;
          } else {}
        }
        if (words[j].endsWith("e") && syllablesInAWord > 1) {
          // silent e at the end of a word, accountong for "THE"
          syllables = syllables - 1;
        }
        console.log(words[j] + " - " + syllablesInAWord);
      }
      return syllables;
    }
  }, {
    key: 'checkSyllables',
    value: function checkSyllables() {
      // debugger;
      this.poem = this.poem.toLowerCase();
      var lines = this.poem.split("\n");
      var requiredAmountOfSyllables = [5, 7, 5];

      for (var i = 0; i < lines.length; i++) {
        var syllablesInALine = this.checkSyllablesInALine(lines[i]);

        // console.log((i+1) + " - " + syllables);
        if (syllablesInALine != requiredAmountOfSyllables[i]) {
          console.log(lines[i] + " - " + syllablesInALine);
          return false;
        }
      }
      return true;
    }
  }]);

  return Haiku;
}();
// exports.haikuModule=Haiku;

},{}],3:[function(require,module,exports){
'use strict';

var _haiku = require('./../js/haiku.js');

var _haikuCreator = require('./../js/haiku-creator.js');

$(document).ready(function () {
  $("#userInput").submit(function (event) {
    event.preventDefault();
    var poem = $("#poem").val();

    var haiku = new _haiku.Haiku(poem);
    if (haiku.check()) {
      $(".output").text("this is a haiku");
    } else {
      $(".output").text("this is NOT a haiku");
    }
  });
  $("#generate").click(function () {
    var generatedHaiku = new _haikuCreator.HaikuCreator();
    var computerPoem = generatedHaiku.create();
    // $("#poem").append(computerPoem);

    var textarea = $("#poem");
    textarea.val(textarea.val() + "\n" + computerPoem + "\n");
  });
});

},{"./../js/haiku-creator.js":1,"./../js/haiku.js":2}]},{},[3]);
