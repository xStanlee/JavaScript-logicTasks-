/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 9 - "Fabryka"
*/

/*
* Cel zadania
*------------
* Zmodyfikuj funkcję factory w taki sposób, aby zmienna quote była dostępna jako właściwość.
*/

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}


// ####--1--####
////////////////

function factory() {
  const obj = {}
  obj.quote = 'Cool!';

  return obj;
}

verify(factory().quote, 'Cool!');

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

// ####--2--####
////////////////

function factoryy(quote) {
  this.quote = quote;
}
let fact = new factoryy('Cool!'); // creat new object based on functiuon constructor

verify(fact.quote, 'Cool!');

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

// ####--3--####
////////////////

class Factory {
  constructor(quote){
    this.quote = quote;
  }

  //Methods on factory here
  changeQuote(change) {
    return this.quote = change;  // This methods goin to proto.
  }
}
let fac = new Factory('Cool!'); // creat new object based on functiuon constructor

verify(fac.quote, 'Cool!');

fac.changeQuote('Not cool :(');

verify(fac.quote, 'Cool!');
