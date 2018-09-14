// Write your code in this file!
function scuberGreetingForFeet(num){
  if (num <= 400){
    return 'This one is on me!'
  }
  else if (num > 2500){
    return 'No can do.'
  }
  else if (num >= 2000){
    return 'I will gladly take your thirty bucks.'
  }
  else{
    return "nothing"
  }
}

function ternaryCheckCity(string){
  if (string == "NYC"){
    return 'Ok, sounds good.'
  }
  else{
    return 'No go.'
  }

}

function switchOnCharmFromTip(n){
  if(n == 'generous'){
    return 'Thank you so much.'
  }
  else if(n == 'not as generous') {
    return 'Thank you.'
  }
  else {
    return 'Bye.'
  }

}
