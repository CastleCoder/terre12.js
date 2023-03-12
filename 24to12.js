// Créez un programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h.


// Exemples d’utilisation :
// $> ruby exo.rb 23:40
// 11:40PM

// Attention : midi et minuit.
const args = process.argv.slice(2);

function getTime(argument1, argument2){
  let separation = argument1.split(':');
  let a = separation[0];
  let b = separation[1];
  let amOrPM = "AM";

  if(isNaN(a) || isNaN(b)){
    console.log("Erreur !")
  } else {
    if(a>24 || a<0 || b > 59 || b<0){
      console.log("Erreur !")
    } else {
      if(a >= 12){
        amOrPM = "PM";
        a=a%12;
        a = a ? a : 12;
      }
      console.log(a + ":" + b + " " + amOrPM);
      console.log(a);
      console.log(b);
    }
  }


}

getTime(args[0], args[1]);