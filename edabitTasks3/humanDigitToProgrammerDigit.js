function returnFirstDigit(str){
    const arrayFromText = Array.from(str);

    arrayFromText.indexOf(arrayFromText.find(function(el) {
            if(isNaN(el) === false && Number(el) !== 0) {
                return el;
            }
    }));
}

const oneDigit = returnFirstDigit('abcd 23');
