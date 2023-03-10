/*Scrivi un programma che stampi in console i numeri da 1 a 100 ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”
per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

// creiamo ul e li
// applichiamo la list nell html
// Creiamo il contenitore con i vari box all'interno in html
// per dividere i multipli USEREMO L'OPERATORE MODULO
//con l'operatore modulo (%) controlliamo se il numero é multiplo di tre ,cioé
// -se il resto della divisione per 3 é uguale a 0
// Se un numero è un multiplo di 3, stampiamo "Fizz" altrimenti stampiamo il numero
//applicare stili differenti ai diversi elementi

//BONUS 1:
// Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
// Potete usare vari strumenti per farlo:
// `append()` oppure
//  `.innerHTML`
//  `.insertAdjacentHTML()`
//  A voi la scelta
// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

const lielement = document.getElementById("box");
for (let i = 1; i <= 100; i++) {
  const nuovoElemento = document.createElement("li");
  nuovoElemento.textContent = i;
  nuovoElemento.style.background = "blue";
  nuovoElemento.style.display = "flex";
  nuovoElemento.style.justifyContent = "center";
  nuovoElemento.style.alignItems = "center";
  lielement.appendChild(nuovoElemento);

  const FrizzBuzz = "FrizzBuzz";
  const Frizz = "Frizz";
  const Buzz = "Buzz";

  if (i % 3 === 0 && i % 5 === 0) {
    nuovoElemento.textContent = FrizzBuzz;
    nuovoElemento.style.background = "pink";
  } else if (i % 3 === 0) {
    nuovoElemento.textContent = Frizz;
    nuovoElemento.style.background = "green";
  } else if (i % 5 === 0) {
    nuovoElemento.textContent = Buzz;
    nuovoElemento.style.background = "yellow";
  }
}
