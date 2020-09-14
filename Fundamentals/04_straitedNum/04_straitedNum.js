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

class CustomError extends Error{
  constructor(message){
    super(message);
    this.message = message;
  };

  notANum() {
    return console.log('Put an Number inside zipIt boi');
  };
}

function zipIt(first, second) {
  if (isNaN(first) || isNaN(second)){
    throw new CustomError('One of passed arguments is not a Number Type.');
  }
  first = Array.from(first.toString());
  second = Array.from(second.toString());
  const properLength = first.length >= second.length ? first.length : second.length;
  let properZip = '';
  
  for (let i = 0; i < properLength; i++){
    if(typeof first[i] !== 'undefined' && typeof second[i] !== 'undefined'){
      properZip += first[i];
      properZip += second[i];
    }else if(typeof first[i] === 'undefined'){
      properZip += second[i];
    }else{
      properZip += first[i];
    }
  }
  
  return properZip;
}

 //Weryfikacja 

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

try {
  verify(zipIt(111, 222), '121212');
  verify(zipIt(123, 456), '142536');
  verify(zipIt(12, 555), '152555'); 
}catch(e){
  e.notANum();
  console.log(e.message);
}
