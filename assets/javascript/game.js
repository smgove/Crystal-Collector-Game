
$(document).ready(function() {

var wins = 0;
var losses = 0;
var targetNumber = 0;
var fishValue = 0;
var frogValue = 0;
var turtleValue = 0;
var wolfValue = 0;
var counter = 0;

function initializeGame() {
  targetNumber = Math.floor(Math.random() * 200) + 50;
  fishValue = Math.floor(Math.random() * 75) + 1;
  frogValue = Math.floor(Math.random() * 50) + 1;
  turtleValue = Math.floor(Math.random() * 25) + 1;
  wolfValue = Math.floor(Math.random() * 8) + 1;
  $("#yourGoal").text(targetNumber)



  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.


  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#fish").attr("data-crystalvalue", fishValue)
  $("#frog").attr("data-crystalvalue", frogValue)
  $("#turtle").attr("data-crystalvalue", turtleValue)
  $("#wolf").attr("data-crystalvalue", wolfValue)
  counter = 0;
  $("#totScore").empty();
}

initializeGame();

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystalImage").on("click", function () {

  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.

  $("#totScore").text(counter);

  if (counter === targetNumber) {
    wins++;
    $("#wins").text(wins)
    initializeGame();
  }

  else if (counter >= targetNumber) {
    losses++;
    $("#losses").text(losses)
    initializeGame();
  }

})

})
