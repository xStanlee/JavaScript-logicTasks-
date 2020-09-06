/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 3 - "Przeplatanie"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która dla dwóch podanych parametrów wykona "przeplatanie"
* - używając kolejnych cyfr parametrów połączy je w jeden string.
*
* Przykład:
* zipIt(111, 222) // => '121212'
* zipIt(123, 456) // => '142536'
* zipIt(12, 5555) // => '152555'
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazane parametry są typu number. Jeśli parametry nie
* spełniają tego warunku, funkcja powinna rzucić wyjątek.
*/

function zipIt(first, second = 0) {
  let arrResult = [];
  const arrOne = Array.from(first.toString());
  const arrTwo = Array.from(second.toString());
  const lenghtOfLongerArray = 
        (arrOne.length >= arrTwo.length) ? arrOne.length : arrTwo.length;
  for (let i = 0; i < lenghtOfLongerArray; i++){
    if((arrOne[i] !== 'undefined') && (arrTwo[i] !== 'undefined')){
      arrResult.push(arrOne[i]);
      arrResult.push(arrTwo[i]);
    }else if (arrOne[i] === 'undefined'){
      arrResult.push(arrTwo[i]);
    }else{
      arrResult.push(arrOne[i]);
    }
  }
  return arrResult;
}

function arrToNumber(arr){
  let striatedNum = '';
  arr.map(el => {
    striatedNum+=el;
  })
  return striatedNum;
}

console.log(arrToNumber(zipIt(1111, 2345)));


// Weryfikacja 

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(arrToNumber(zipIt(111, 222)), '121212');
verify(arrToNumber(zipIt(123, 456)), '142536');
verify(arrToNumber(zipIt(12, 5555)), '152555');
