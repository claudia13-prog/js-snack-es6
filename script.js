/* Creare un array di oggetti:
 Ogni oggetto descriverà una bici da corsa
con le seguenti proprietà: nome e peso.

*/

const bike = [{
    nome: 'Bike 1',
    peso: 5
}, {
    nome: 'Bike 2',
    peso: 4
}, {
    nome: 'Bike 3',
    peso: 6
}, {
    nome: 'Bike 4',
    peso: 7
}, {
    nome: 'Bike 5',
    peso: 3
}];


/* Stampare a schermo la bici con peso minore.
Comparo i pesi di tutte le bike, salvo il penso minore
e lo stampo a schermo. */

const bikeLenght = bike.length;

let lowerWeight = bike[0].peso;

for(let i = 0; i < bikeLenght; i++){

    console.log(`valore i ${i}`);

    if(lowerWeight < bike[i].peso){
        console.log(`valore peso ${lowerWeight}`);

    } else {
        lowerWeight = bike[i].peso;

    }


}

console.log(lowerWeight);


















