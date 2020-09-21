/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 17 - "Anagramy"
*/

/*
* Cel zadania
*------------
* Otrzymując jako parametry słowo i tablicę jego możliwych anagramów, zwróć tablicę z właściwymi anagramami.
*
*  Anagram to wyraz powstały przez przestawienie liter innego wyrazu, wykorzystujący wszystkie litery materiału wyjściowego.
*
* Przykład:
* getAnagrams("przeprogramowani", ["orperzpinawomarg", "swag", "graprzewanipromo", "orperzpwaniprom", "siema"]);  => ["orperzpinawomarg",  "graprzewanipromo"]
* 
* 
*/
const regex = /,/gi ;

function getAnagrams(word, possibleAnagrams) {
  let returnedArr = [];
  let patern = word;
  const singleCharCheck = (element) => patern.includes(element);
  const arrFrom = anagramsArr(possibleAnagrams);
  for (let arrOfStrings = 0; arrOfStrings < arrFrom.length; arrOfStrings++){
    if(arrFrom[arrOfStrings].every(singleCharCheck) && 
       arrFrom[arrOfStrings].length === patern.length){
      
      let elSorted = regEx(arrFrom[arrOfStrings].toString());
      returnedArr.push(elSorted);
    }
  }
  return returnedArr;
}

  function anagramsArr(arr){
    const anagramCharArr = arr.map(el => Array.from(el));
    return anagramCharArr;
  }

  function regEx(str){
    let returnedStr = str.replace(regex, '');
    return returnedStr;
  }

/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(', ') : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(getAnagrams("przeprogramowani", ["orperzpinawomarg", "swag", "graprzewanipromo", "orperzpwaniprom", "siema"]), "orperzpinawomarg, graprzewanipromo");
verify(getAnagrams("siema", ["hej", "witam", "dzień dobry", "emasi"]), "emasi"); 
