/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 7 - "Emoji"
*/

/*
* Cel zadania
*------------
* Zaimplementuj funkcję "useEmoji", która zastąpi wszystkie słowa danego parametru zgodnie 
* z mapowaniem z obiektu "emojiMappings";
*
* Przykład:
* useEmoji('Takiemu zachowaniu mówię stop i to mocny stop!') // => 'Takiemu zachowaniu mówię 🚫 i to mocny 🚫!'
* useEmoji('Jadę po nowy samochód :D') // => 'Jadę po nowy 🏎 :D'
*/

const emojiMappings = {
  'stop': '🚫',
  'gwiazda': '⭐️',
  'samochód': '🏎',
  'buduję': '🧱',
  'budzik': '⏰'
};
const entriesEmoji = Object.entries(emojiMappings);

function useEmoji(input) {
  let changedString = '';
  for (const [key, value] of entriesEmoji){
    if (input.includes(key)){
      let regex = new RegExp(key, 'g');
      changedString = input.replace(regex, value);
    }
  }
  return changedString;
}
/* Weryfikacja */
function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(useEmoji('Takiemu zachowaniu mówię stop i to mocny stop!'), 'Takiemu zachowaniu mówię 🚫 i to mocny 🚫!');
verify(useEmoji('Jadę po nowy samochód :D'), 'Jadę po nowy 🏎 :D');
verify(useEmoji('Właśnie buduję swoje skille w JS'), 'Właśnie 🧱 swoje skille w JS');
