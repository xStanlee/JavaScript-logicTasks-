/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 14 - "Hashtagujesz"
*//*
return arrHashedWords = arrHashedWords
                                      .slice(++indexOfEmptyVal, arrHashedWords.length)
                                        .toString()
                                          .replace('!', '');
/*
* Cel zadania
*------------
* Zaimplementuj funkcję wyszukującą hashtagi w zdaniu
*
*
* Przykład:
* findTags('W 2020 #opanujeJS'); // => opanujeJS
* findTags('Za chwilę dodam #opanujeJS!'); // => opanujeJS
* findTags('Lubię tagować #yolo #love#happy #h3cker'); // => yolo, love, happy, h3cker
* 
*/
function addSpaceForStringExchange(arr){
  let arrWithSpaces = [];
  for (let i = 0; i < arr.length; i++){
    if(i === 0){
      arrWithSpaces.push(arr[i]);
    }else{
      arrWithSpaces.push(` ${arr[i]}`);
    }
  }
  return arrWithSpaces;
}

function splitSentenceToArr(sentence){
  let arrFromSentence = sentence.split(' ');
  return arrFromSentence.filter(word => word.startsWith('#'));
}

function filterWords(arr){
  let filtredArray = arr.join('')
                          .split('#');
  return filtredArray;
}

function findTags(message) { 
  let arrFromSentence = filterWords(splitSentenceToArr(message));
  let indexOfEmptyVal = arrFromSentence.indexOf('');
  arrFromSentence = arrFromSentence.slice(++indexOfEmptyVal, arrFromSentence.length);
  return addSpaceForStringExchange(arrFromSentence).toString()
                                                    .replace('!', '');
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

verify(findTags('W 2020 #opanujeJS'), 'opanujeJS');
verify(findTags('Za chwilę dodam #opanujeJS!'), 'opanujeJS');
verify(findTags('Lubię tagować #yolo #love#happy #h3cker'), 'yolo, love, happy, h3cker');
