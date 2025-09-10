function scuberGreetingForFeet(ride){
  // Write your code here!
  if(ride <= 400) {
    return "This one is on me!"
  }

  if(ride > 2500) {
    return "No can do."
  }


  if(ride >= 400 && ride <= 2000) {
    return "That will be twenty bucks."
  }

  if(ride >= 2000) {
    return "I will gladly take your thirty bucks."
  }


}

console.log(scuberGreetingForFeet(400));




function ternaryCheckCity(city){
  // Write your code here!
  if(city === "NYC"){
    return "Ok, sounds good."
  }
  else {
    return "No go."
  }

}

console.log(ternaryCheckCity("NYC"));


function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case 'generous':
      return "Thank you so much."

    case 'not as generous':
      return "Thank you."

    default:
      return "Bye."
  }
}

console.log(switchOnCharmFromTip())