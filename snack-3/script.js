// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

 const result = fromAToBNumbers(15, 10);

console.log(result);

/*
* @param {number} a
* @param {number} b
* @returns {array}
*/
function fromAToBNumbers(a, b){

    const array = [];

    if(a <= b) {

        for(let i = a; i <= b; i++){

            array.push(i);

        }
    } else {

       return console.log('Errore: a > b');

    }



// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

    return array;


}


