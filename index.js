// scuberGreetingForFeet() — Use if and else if statements to return the correct greeting based on the distance the passenger desires to travel.

// ternaryCheckCity() — Use a ternary operator to return the correct response based on the desired destination of the passenger.

// switchOnCharmFromTip() — Use a switch statement to return a different response based on the generosity of the passenger's tip.


// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
      return 'This one is on me!';
  } else if (someValue > 2500) {
      return 'No can do.';
  } else if (someValue > 2000) {
      return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city) {
  if (city === "NYC") {
      return "Ok, sounds good.";
  } else
      return "No go.";
}

function switchOnCharmFromTip(tip) {
  if (tip === "generous") {
      return "Thank you so much.";
} else if (tip === "not as generous") {
      return "Thank you.";
} else {
      return "Bye.";
  }
}
