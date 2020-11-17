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

const lessons = require('./files/lessons.data.js');
const Majster = require('./Classes/Majster.js');

const fullCourse = new Majster(lessons, '');
const masterAdam = new Majster(lessons, '[1x');
const masterPrzemo = new Majster(lessons, '[2x');
const masterMarcin = new Majster(lessons, '[3x');

function answear(){
  return `Kurs Opanuj JavaScript trwa ${fullCourse.hours} godzin i ${fullCourse.minutes} minut.
Moduł Adama: ${masterAdam.hours} godzin ${masterAdam.minutes} minut i stanowi to ${masterAdam.percentage} kursu.
Moduł Przemka: ${masterPrzemo.hours} godzin ${masterPrzemo.minutes} minut minut i stanowi to ${masterPrzemo.percentage} kursu.
Moduł Marcina: ${masterMarcin.hours} godzin ${masterMarcin.minutes} minut i stanowi to ${masterMarcin.percentage} kursu.
  `
}

answear();
