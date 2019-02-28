$(document).ready(function() {

var goal=0;
var fish= 0;
var turtle= 0;
var frog= 0;
var wolf = 0;

function startGame(){


 goal= Math.floor(Math.random() * 150)+1;
 fish= Math.floor(Math.random() * 50)+1;
 turtle= Math.floor(Math.random() * 20)+1;
 frog= Math.floor(Math.random() * 10)+1;
 wolf= Math.floor(Math.random() * 5)+1;
 $("#yourGoal").text(goal);

}




    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
$(".crystal-image").on("click", function() {

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
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

}