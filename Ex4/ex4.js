//Scrieți o funcție pentru a adăuga numere nelimitate
//Funcția addNumber() returnează suma tuturor numerelor transmise ca argumente funcției. 
//Numărul de argumente nu este definit. Se poate transmite un număr nelimitat de numere.


// '...argumente' captează toate argumentele transmise funcției addNumber într-un array numit argumente.
const addNumber = (...argumente) => {

    let suma = 0;
     
    for(let num of argumente) {
        suma += num;
    }

    return suma;

    };

    console.log(addNumber(1, 2, 3));        
    console.log(addNumber(1, 2, 3, 4, 5));   
  