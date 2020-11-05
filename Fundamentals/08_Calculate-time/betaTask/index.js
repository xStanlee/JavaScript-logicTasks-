/*
  Zadanie:
  Spraw aby działało

  Warunki:
  1. NIE MOŻESZ ZMIENIĆ NIC W TYM PLIKU
  2. KOD PISZESZ I ROZWIJASZ TYLKO W `Timer.js`
 */
const assert = require('assert');
const {Timer} = require('./Timer');

const timer1 = new Timer('00:11');
const timer2 = new Timer('00:55');
const timer3 = new Timer('01:30');
timer1.addSeconds(10);
timer3.addSeconds(100);

wholeTime = new Timer('00:00');
wholeTime.addSeconds(timer1.total);
wholeTime.addSeconds(timer2.total);
wholeTime.addSeconds(timer3.total);

const result = `
Całość trwa: ${wholeTime.total} sekund.
Co daje ${wholeTime.minutes} minuty i ${wholeTime.seconds} sekund
Moduł 1: ${timer1.minutes} minut i ${timer1.seconds} sekund
Moduł 2: ${timer2.minutes} minut i ${timer2.seconds} sekund
Moduł 3: ${timer3.minutes} minuty i ${timer3.seconds} sekund
`

/* Weryfikacja */

assert(result === expectedAnswer(), `

Niestety - błąd,
oczekiwałem:
${expectedAnswer()}
----------------------
otrzymałem:
${result}

`)
console.log('BRAWO ! - wszystko działa :)')

function expectedAnswer() {
  return `
Całość trwa: 266 sekund.
Co daje 4 minuty i 26 sekund
Moduł 1: 0 minut i 21 sekund
Moduł 2: 0 minut i 55 sekund
Moduł 3: 3 minuty i 10 sekund
`
}
