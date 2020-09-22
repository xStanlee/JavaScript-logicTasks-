const caesarPatern = 13;

function caesar13(str){
    if (isString(str) && isEmpty(str)) {
        const arrOfNumbers = numbersArr(str);
        const changedArrOfNumbers = arrOfNumbers.map(el => el + caesarPatern);
        return console.log(arrToString(changedArrOfNumbers));
    }
}
    function isString(val){
        if(typeof val !== "string"){
            alert(`Please enter a string value to function instead of ${typeof val}`);
            return false;
        }
        return true;
    }

    function isEmpty(val){
        if(val.length === 0) {
            alert("String gotta has at least one character");
            return false;
        }
        return true;
    }

    function numbersArr(str){
        let arrOfNumbers = [];
        for (let i = 0; i < str.length; i++){
            arrOfNumbers.push(str.charCodeAt(i));
        }
        return arrOfNumbers;
    }

    function arrToString(arr){ 
        let caesar13Str = '';
        const caesarArray = arr.map(el => String.fromCharCode(el));
        //caesarArray.forEach(el => caesar13Str += el);
        return caesarArray;
    }
caesar13('aaaaaaaaAAAA');
