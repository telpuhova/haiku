import { Haiku } from './../js/haiku.js';

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
});
