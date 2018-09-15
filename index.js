// Write your code in this file!
function scuberGreetingForFeet (ride) {
  let result
  if (ride <= 400) {
    result = "This one is on me!"
  } else if (ride > 2500) {
      result = 'No can do.'
  } else if (ride > 2000) {
    result = 'I will gladly take your thirty bucks.'
  }
    return result
}


function ternaryCheckCity (city) {

  let result;
  if (city != "NYC"){
  result = "No go."
  } else if (city = "NYC") {
    result = "Ok, sounds good."

  }
  return result
}

function switchOnCharmFromTip(tip) {
  let result;

  switch(tip) {
  case "generous":
  result = "Thank you so much.";
  break;
  case 'not as generous':
  result = 'Thank you.';
  break;
  default:
  result = 'Bye.'
  }
  return result
}
