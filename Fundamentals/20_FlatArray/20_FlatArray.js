/*
* Opanuj JavaScript - Przeprogramowani.pl
* I. Fundamenty języka JavaScript
*
* Ćwiczenie 20 - "Płaska tablica"
*/

/*
* Cel zadania
*------------
* Weź tablicę zawierającą zagnieżdżone tablice i zwróć płaską tablicę zawierającą  wartości liczbowe bez powtórek oraz pozbawioną wartości null/undefined.
*
* Przykładowo: 
* flattenArray([4, [3, 2, undefined, 1], [1, 4, null, 5]]) => [4, 3, 2, 1, 5]
* 
* Oczekuj tylko jednego poziomu zagnieżdżenia tablic.
* 
*/

function flattenArray(deepArray) {
   let flatArray = [];
   for (let indexOuter = 0; indexOuter < deepArray.length; indexOuter++){
     if(Array.isArray(deepArray[indexOuter])){
       let elementaryArray = deepArray[indexOuter].filter(el => el);
       for (element of elementaryArray){
         if(!flatArray.includes(element)){
           flatArray.push(element);
         }
       }
     }else{
       if(deepArray[indexOuter] !== null && deepArray[indexOuter] !== undefined){
        flatArray.push(deepArray[indexOuter]);
       }
     }
   }
   return flatArray;
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

verify(flattenArray([4, [3, 2, undefined, 1], [1, 4, null, 5]]), "4, 3, 2, 1, 5");
verify(flattenArray([null, [1, 2, 3], [null, undefined]]), "1, 2, 3");
