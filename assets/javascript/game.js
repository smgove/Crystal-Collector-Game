
$(document).ready(function () {

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

    $("#fish").attr("data-crystalvalue", fishValue)
    $("#frog").attr("data-crystalvalue", frogValue)
    $("#turtle").attr("data-crystalvalue", turtleValue)
    $("#wolf").attr("data-crystalvalue", wolfValue)
    counter = 0;
    $("#totScore").empty();
  }

  initializeGame();

  $(".crystalImage").on("click", function () {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

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
