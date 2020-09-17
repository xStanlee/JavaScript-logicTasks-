
/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 12 - "Mr. Elliot"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję zmieniającą tekst na pozdrowienia od Mr. Elliota, według przykładu.
*
*
* Przykład:
* greetings('hacker'); // => 'H4Ck3r'
* greeting('Control Is An Illusion'); // => 'C0NtR0L 15 4N 1lLu510n'
* greeting('Saving The World'); // => 'S4V1Ng tHe w0rLd'
* 
*/
const regex = /,/gi;

function pokemonizm(char){
  let pokemonizedChar = char;
  switch(pokemonizedChar){
    case 'a':
    case 'A':
      pokemonizedChar = '4';
      break;
    case 'e':
    case 'E':
      pokemonizedChar = '3';
      break;
    case 'o':
    case 'O':
      pokemonizedChar = '0';
      break;
    case 'i':
    case 'I':
      pokemonizedChar = '1';
      break;
    case 's':
    case 'S':
      pokemonizedChar = '5';
      break;
    default:
      pokemonizedChar;
    }
  return pokemonizedChar;
}

function smallBig(arr){
  let returnedArr = [];
  for (let i = 0; i <arr.length; i++){
    if (i%2 === 0){
      returnedArr.push(arr[i].toUpperCase());
    }else {
      returnedArr.push(arr[i].toLowerCase());
    }
  }
  return returnedArr;
}


function greeting(message) {
  let fullyPokemoned = smallBig(Array.from(message));
  return fullyPokemoned = fullyPokemoned.map(el => pokemonizm(el)).toString().replace(regex, '');
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(greeting('hacker'), 'H4Ck3r');
verify(greeting('Control Is An Illusion'), 'C0NtR0L 15 4N 1lLu510n');
verify(greeting('Saving The World'), '54V1Ng tH3 w0rLd');
