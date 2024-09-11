const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
let counter = -1

function getDayLoop(day){
    if (day < 1 || day > 7){
        return "Numéro de jour invalide"
    }
    else {
        for (let i = day; i > 0; i--) {
            counter = counter + 1;
        }
        return days[counter]
    }
}

console.log(getDayLoop(8));