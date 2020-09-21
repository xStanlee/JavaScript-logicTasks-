/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 19 - "Dopasuj nawiasy"
*/

/*
* Cel zadania
*------------
* Otrzymując stringa zawierającego nawiasy kwadratowe [], klamry {} lub nawiasy okrągłe (), upewnij się że wszystkie z par są dopasowane i prawidłowo zagnieżdżone. Jeżeli wszystko się zgadza, zwróć true. W przypadku wykrycia błędów, zwróc false.
*
* Przykład: '[{()}]' => true
* Przykład: '[{]}' => false
*/

function isDoublet(arr){
  let leftsideCurlyBraces = 0;
  let rightsideCurlyBraces = 0;
  let leftsideRoundBrackets = 0;
  let rightsideRoundBrackets = 0;
  let leftsideSquareBrackets = 0;
  let rightsideSquareBrackets = 0;
  let val = false;
  for (const el of arr){
    switch(el){
      case '{':
        leftsideCurlyBraces++;
        break;
      case '(':
        leftsideRoundBrackets++;
        break;
      case '[':
        leftsideSquareBrackets++;
        break;
      case '}':
        rightsideCurlyBraces++;
        break;
      case ')':
        rightsideRoundBrackets++;
        break;
      case ']':
        rightsideSquareBrackets++;
        break;
      default:
        console.log('Something went wrong!');
        break;
    }
  }
  if(leftsideCurlyBraces === rightsideCurlyBraces &&
    leftsideRoundBrackets === rightsideRoundBrackets &&
    leftsideSquareBrackets === rightsideSquareBrackets){
      val = true;
    }
   return val;
}

function isRight(arr){
  let stosArr = [];

  for(const el of arr){
    if(['{', '(', '['].includes(el)){
      stosArr.push(el);
    }else{
      if(arr.length === 0){
        return false;
      }
      let currentElement = stosArr.pop();
      switch(currentElement){
        case '{':
          if(el !== '}'){
            return false
          }
          break;
        case '[':
          if(el !== ']'){
            return false
          }
          break;
        case '(':
          if(el !== ')'){
            return false
          }
          break;
      }
    }
  }
  return stosArr.length === 0 ? true : false;
}

function checkBrackets(stringWithBrackets) {
 let arrFrom = Array.from(stringWithBrackets);
 return isDoublet(arrFrom) ? isRight(arrFrom) : false;
}


/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
  if (input == goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(checkBrackets("[{()}]"), true);
verify(checkBrackets("[{]}"), false);
verify(checkBrackets("()[{}]"), true);
verify(checkBrackets("{[(]}}"), false);
