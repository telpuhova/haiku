import { Haiku } from './../js/haiku.js';
import { HaikuCreator } from './../js/haiku-creator.js';

$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    let poem = $("#poem").val();

    let haiku = new Haiku(poem);
    if (haiku.check()) {
      $(".output").text("this is a haiku");
    } else {
      $(".output").text("this is NOT a haiku");
    }
  });
  $("#generate").click(function() {
    let generatedHaiku = new HaikuCreator();
    let computerPoem = generatedHaiku.create();
    // $("#poem").append(computerPoem);

    var textarea = $("#poem");
    textarea.val( textarea.val() + "\n" + computerPoem + "\n");
  })
});
