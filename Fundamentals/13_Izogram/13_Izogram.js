/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 13 - "Izogram"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję sprawdzającą czy podane słowo jest izogramem, czyli słowem w którym każda litera występuje tylko jeden raz.
*
*
* Przykład:
* isogram('Izogram'); // => true
* isogram('Przeprogramowani'); // => false
* 
*/

function isogram(word) {
  const lowercaseWord = word.toLowerCase();
  const arrFrom = Array.from(lowercaseWord);
  let trueOrFalse = true;
  for (let holdChar = 0; holdChar < arrFrom.length; holdChar++){
    let count = 0;
    for (let restChars = 0; restChars < arrFrom.length; restChars++){
      if(arrFrom[holdChar] == arrFrom[restChars]){
        count++;
      }
    }
    if (count > 1){
      trueOrFalse = false;
    }
  }
  return trueOrFalse;
}
/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(isogram('izogram'), true);
verify(isogram('Przeprogramowani'), false);
verify(isogram('SprawdzAm'), false);
 
