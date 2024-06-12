//Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir
//Funcția letterCount() returnează numărul apariții al unei litere trimise ca parametru dintr-un șir dat.

function letterCount(sir, litera) {
    // Convertim sirul si litera la litere mici pentru a ignora diferentele intre majuscule si minuscule
    let lowerCaseSir = sir.toLowerCase();
    let lowerCaseLitera = litera.toLowerCase();
    
    //  contor pentru aparitii
    let count = 0;

    // Iteram prin fiecare caracter din sir si numaram aparitiile literei
    for (let i = 0; i < lowerCaseSir.length; i++) {

        //lowerCaseSir[i] este folosit pentru a accesa fiecare caracter din șir

        if (lowerCaseSir[i] === lowerCaseLitera) {
            count++;
        }
    }

    // Returnam numarul de aparitii
    return count;
}

let sir1 = "Îmi place programarea";
let litera1 = "a";
console.log(letterCount(sir1, litera1));

let sir2 = "Vreau să lucrez în IT";
let litera2 = "r";
console.log(letterCount(sir2, litera2)); 
