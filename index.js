// Write your code in this file!
function scuberGreetingForFeet(numOfFeet){
  if(numOfFeet <= 400){
    return 'This one is on me!';
  }else if(numOfFeet >= 2000 && numOfFeet < 2500){
    return 'I will gladly take your thirty bucks.';
  }else if (numOfFeet >= 2500){
    return 'No can do.';
  }
};

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
};

function switchOnCharmFromTip(tipStatement){
  switch(tipStatement){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
