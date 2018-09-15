// Write your code in this file!
// scuberGreetingForFeet() — Use if and else if statements to return the correct greeting based on the distance the passenger desires to travel.
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!'
  } else if (distance > 2000 && distance < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}
// ternaryCheckCity() — Use a ternary operator to return the correct response based on the desired destination of the passenger.

function ternaryCheckCity(destination) {
  return destination == 'NYC'? "Ok, sounds good.":"No go."
}
// switchOnCharmFromTip() — Use a switch statement to return a different response based on the generosity of the passenger's tip.
function switchOnCharmFromTip(tip) {
  let charm = ""
  switch (tip) {
    case 'not as generous':
      charm = 'Thank you.'
      break;

    case 'generous':
      charm = 'Thank you so much.'
      break;
  
    default:
      charm = "Bye."
      break;
  }
  return charm
}