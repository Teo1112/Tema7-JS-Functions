//Scrieți o funcție pentru a genera un număr aleatoriu mai mare sau egal cu o variabilă start și strict mai mic decât o variabilă end . 
//Aceste două variabile sunt capetele intervalului pentru numărul general: [start, end)
//Funcția getRandom(start, end) returnează un număr întreg aleator generat în intervalul definit de variabilele de început și sfârșit furnizate.


function getRandom(start, end) {
    if (start >= end) {
        return undefined;
    }
    // Math.floor -> aproximeaza numarul pt a ajunge la un nr intreg
    //Math.random -> genereaza un numar mai mare ca 0 si mai mic ca 1
    let randomNumber = Math.floor(Math.random() * (end - start)) + start;
    
    return randomNumber;
}

const start = 3;
const end = 100;
const randomNum = getRandom(start, end);
if (randomNum !== undefined) {
    console.log(randomNum); 
} else {
    console.log("Nu s-a putut genera un număr aleatoriu din cauza valorilor invalide pentru start și end.");
}


