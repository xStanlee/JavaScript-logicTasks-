/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 8 - "Czas trwania"
*/

/*
* Cel zadania
*------------
* Napisz funkcję, która policzy czas trwania kursu z podziałem na lekcje przygotowane przez Adama, Marcina i Przemka.

*
* Funkcja ma zwrócić zdanie:
* "Kurs Opanuj JavaScript trwa x godzin i y minut.
   Moduł Adama: ... godzin ... minut
   Moduł Przemka: ... godzin ... minut
   Moduł Marcina: ... godzin ... minut
"
*/

/*
* Punkty dodatkowe
*-----------------
* W wiadomości zwrotnej uwzględnij jaki % kursu stanowią materiały z poszczególnych modułów.
*/
const Majster = require('./exports/Majster.js');
const mentorsTime = require('./exports/partialduration.func.js');

const masterJabi = new Majster('Jabi', 9999999);


const masterAdam = new Majster('Adam', mentorsTime.adam);
const masterPrzemek = new Majster('Przemek', mentorsTime.przemek);
const masterMarcin = new Majster('Marcin', mentorsTime.marcin);
const fullCourse = new Majster('Przeprogramowani', 
                                (mentorsTime.przemek + 
                                 mentorsTime.marcin + 
                                 mentorsTime.adam));

const arrForAll = [masterAdam, masterPrzemek, masterMarcin, fullCourse];

arrForAll.forEach(el => {
  el.calcMinutes();
  el.calcHours();
  });


function answear(){
  return `Kurs Opanuj JavaScript trwa ${fullCourse.hours} godzin i ${fullCourse.minutes} minut.
Moduł Adama: ${masterAdam.hours} godzin ${masterAdam.minutes} minut i stanowi to ${masterAdam.percentage} kursu.
Moduł Przemka: ${masterPrzemek.hours} godzin ${masterPrzemek.minutes} minut minut i stanowi to ${masterPrzemek.percentage} kursu.
Moduł Marcina: ${masterMarcin.hours} godzin ${masterMarcin.minutes} minut i stanowi to ${masterMarcin.percentage} kursu.
  `
}

masterJabi.goodOrNo();
answear();
