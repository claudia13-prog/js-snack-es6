// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const teams = [{
    nome: 'Squadra 1',
    punti: 0,
    falli: 0
}, {
    nome: 'Squadra 2',
    punti: 0,
    falli: 0
}, {
    nome: 'Squadra 3',
    punti: 0,
    falli: 0
}, {
    nome: 'Squadra 4',
    punti: 0,
    falli: 0
}, {
    nome: 'Squadra 5',
    punti: 0,
    falli: 0
},{
    nome: 'Squadra 6',
    punti: 0,
    falli: 0
}];


/* Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
1) Creare una funzione che genera nunmeri random
2) Richiamare la funzione in un ciclo 'for' che assegnerà i valori (da 0 a 100) alle proprietà “punti” fatti e “falli subiti”
*/

const teamsLenght = teams.length;

const teams2 = [];


for(let i = 0; i < teamsLenght; i++){

    teams[i].punti = getRndInteger(0, 100);
    teams[i].falli = getRndInteger(0, 100);

    // Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


    teams2.push({nome: teams[i].nome, falli: teams[i].falli});



};

console.log(teams);

console.log(teams2);



///////////////////////////////
// FUNCTIONS
/**
 * Genera un numero intero random compreso tra min e max intrambi inclusi
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

