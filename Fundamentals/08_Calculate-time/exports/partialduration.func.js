
const lessons = require('./lessons.data.js');
const courseMentors = { 'przemek': 0,
                        'marcin': 0,
                        'adam': 0 }

function partialDuration(data) {
  let perOne = 0;
  let perTwo = 0;
  let perThree = 0;
    for (const object of data){
      if (object.name.startsWith('[2x')){
        let temporary = object.length.split(':');
        temporary = calculateSec(temporary);
        perOne += temporary;
      }else if (object.name.startsWith('[3x')){
        let temporary = object.length.split(':');
        temporary = calculateSec(temporary);
        perTwo += temporary;
      }else{
        let temporary = object.length.split(':');
        temporary = calculateSec(temporary);
        perThree += temporary;
      }
    }
    
  function calculateSec(arr){
    let secReturned = 0;
    for (let i = 0; i < arr.length; i++){
      if(i === 0){
        secReturned += Number(arr[i]) * 60;
      }
      secReturned += Number(arr[i]);
    }
    return secReturned;
  }
  courseMentors.przemek = perOne;
  courseMentors.marcin = perTwo;
  courseMentors.adam = perThree;
}

partialDuration(lessons);

module.exports = courseMentors;
