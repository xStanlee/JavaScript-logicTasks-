
/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 2 - "Walidacja"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję, która sprawdzi, czy przekazane hasło spełnia określone warunki:
*
* a) Ma długość od 3 do 10 znaków
* b) Zawiera jeden ze znaków specjalnych - !, @ lub #
* c) Zawiera cyfrę
*
* Przykład:
* validatePassword('test') // => false
* validatePassword('test11!') // => true
*/

/*
* Punkty dodatkowe
*-----------------
* Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
* spełnia tego warunku, funkcja powinna rzucić wyjątek.
*/

function passLengthValidation(password) {
  if (password.length >= 3 && password.length <= 10){
    return true;
  }else {
    return false;
  }
}

function passSpecialCharValidation(password){
  let result = false;
  password = Array.from(password);
  for (const el of password) {
    if(((el.charCodeAt(0) >= 32) && (el.charCodeAt(0) <= 46)) ||                ((el.charCodeAt(0) >= 57) && (el.charCodeAt(0) <= 64)) ||
      ((el.charCodeAt(0) >= 91) && (el.charCodeAt(0) <= 96)) ||
      ((el.charCodeAt(0) >= 123) && (el.charCodeAt(0) <= 127))){
        result = true;
        break;
       }else{
        result = false;
       }
    }
    return result;
}

function passNumberValidation(password) {
  const regex = /[0-9]/g;
  const found = password.match(regex);
  return (found !== null) ? true : false;
}


function validatePassword(password) {
  if (passLengthValidation(password) && 
      passNumberValidation(password) && 
      passSpecialCharValidation(password)){
        return true;
      }else return false;
} 

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(validatePassword(''), false);
verify(validatePassword('lol'), false);
verify(validatePassword('ToDziala1#'), true);
