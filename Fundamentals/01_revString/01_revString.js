/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 1 - "Odwróć to"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która odwróci przekazany do niej string.
*
* Przykład:
* reverseMe('abc') // => 'cba'
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
* spełnia tego warunku, funkcja powinna rzucić wyjątek.
*/

const NewTypeError = require('./NewTypeError.js');

try{
  verify(reverseMe('mars'), 'sram');
  verify(reverseMe(3), '!owarB');
} catch(e) {
  alert(e.message);
}
function validator(input){
  return typeof(input) === "string";
}

function reverseMe(input) {
  if(!validator(input)) {
    throw new NewTypeError(`Typ danych umieszczonych jako argument funkcji ${typeof(input)}. 
Funkcja dopuszcza tylko typ \'string\'.`);
  }
  return (input.length === 0) ? input : reverseMe(input.substring(1, input.length)) + input[0];
}

/* Weryfikacja */
function verify(input, goal) {
    if (typeof input !== 'undefined' || typeof input === 'string') {
      if(input === goal) {
        console.log('Gratulacje!');
      }else {
        console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
        }
    }
}

