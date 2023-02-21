function scuberGreetingForFeet(distance){

  let cost
 if (distance > 2500){
     cost = 'No can do.'
 } else if (distance > 2000) {
cost = "I will gladly take your thirty bucks."
 } else if (distance > 400) {
  cost = "That will be twenty bucks."
   } else {
    cost = 'This one is on me!'
   }

 return cost
}

function ternaryCheckCity(city){
  let msg
   msg = city ===  "NYC" ? "Ok, sounds good." : "No go." 

   return msg
 }

function switchOnCharmFromTip(amount){
  let resp
  switch  (amount){
    case "generous" : resp = "Thank you so much.";
    break;
    case "not as generous" : resp = "Thank you.";
    break;
    case "thanks for everything" : resp = "Bye."
  }

  return resp
}