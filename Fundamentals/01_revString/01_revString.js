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

function reverseMe(input) {
  input = Array.from(input);
  input = input.reverse();
  input = input.join("");
  return input;
}

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
* spełnia tego warunku, funkcja powinna rzucić wyjątek.
*/

function stringVerify(input){
  if (typeof input !== "string"){
    try{
      throw new Error('This value is not string type.');
    }catch(e){
      console.log(e.message);
    }
  }else return input;
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(reverseMe(stringVerify('a')), 'a');
verify(reverseMe(stringVerify('abc')), 'cba');
verify(reverseMe(stringVerify('Przeprogramowani')), 'inawomargorpezrP');
verify(reverseMe(stringVerify('Brawo!')), '!owarB');

