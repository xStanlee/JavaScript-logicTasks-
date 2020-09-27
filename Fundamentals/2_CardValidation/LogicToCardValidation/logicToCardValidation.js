let valueOnPageChangeCard = document.querySelector('.header__task');
let valueOnPageChangeNum = document.querySelector('.header__number');

let cardNumber = 0;
let countOfTries = 1;
let nameOfCard = '';

function cardValidation(number){
    cardNumber = Number(number);
    if(typeof number !== "number"){
        cardNumber = isNumber();
    }
    if(!(properLength(cardNumber) > 12 &&
         properLength(cardNumber) !== 14 &&
          properLength(cardNumber) < 17)){
        cardValidation('err');
    }

    const properNumber = properLength(cardNumber);
    const strID = String(cardNumber);

    try{
        switch(properNumber){
            case 13:
                nameOfCard = visa(strID);
                break;
            case 15:
                nameOfCard = americanExpress(strID);
                break;
            case 16:
                nameOfCard = visaORamericanExpress(strID);
                break;
            default:
                throw new Error('Process error');
        };
    }catch(e){
        alert(e.message);
    }
    if(nameOfCard === 'FAIL'){
        cardValidation('err');
    }
    const arrForLuhna = Array.from(strID);
    if(luhnaAlgorithm(arrForLuhna)){
        cardNameOutput(valueOnPageChangeCard, nameOfCard);
        cardIDOutput(valueOnPageChangeNum, strID);
    }
}

///// FOR ENACAPSULATE FILES --> Validation of data-type
    function firstPrompt(){
        let passedArgument = prompt("Please enter your card number: ");
        const statement = isNaN(Number(passedArgument));
        if(!statement){
            return Number(passedArgument);
        }else{
            return isNumber();
        }
    };

    function isNumber(val = '', message = `Your card ID is invalid. Please enter correct. ${3-countOfTries} Tries left.`){
        if(typeof val !== "number"){
            let input = prompt(message);
            if(isNaN(Number(input))){
                if(countOfTries >= 3){
                    cardNameOutput(valueOnPageChangeCard, `INVALID`);
                    cardIDOutput(valueOnPageChangeNum, `TRY ENTER AFTER FEW MINUTES`);
                    return console.log('To manny if');
                }
                countOfTries++;
                return isNumber();
            }else{
                countOfTries++;
                return Number(input);
            }
        }
        return val;
    };

    function properLength(num){
        let ConvertedNum = num.toString(10);
        const lenOfConvertedNum = ConvertedNum.length;
        return lenOfConvertedNum;
    };

    function visa(el){
        if(el.startsWith('4')){
            return 'VISA';
        }
        return 'FAIL';
    }

    function masterCard(el){
        if(el.startsWith('34') ||
             el.startsWith('37')){
            return 'AMERICAN_EXPRESS';
        }
        return 'FAIL';
    }

    function visaORamericanExpress(el){
        if(el.startsWith('4')||
            el.startsWith('51') ||
             el.startsWith('52') ||
              el.startsWith('53') ||
               el.startsWith('54') ||
                el.startsWith('55')){
                    if(el.startsWith('4')){
                        return 'VISA';
                    }else{
                        return 'MASTERCARD';
                    }
                }
        return 'FAIL';
    }
    function luhnaAlgorithm(arr){
        let notMultipledNumber = 0;
        let multipledNumbers = 0;
        let pairIndex = 1;
        for(let i = arr.length-1; i >= 0; i--){
            if( pairIndex%2 !== 0 ) {
                notMultipledNumber+=Number(arr[i]);
                pairIndex++;
            }else{
                let el = Number(arr[i]) * 2;
                if (el >= 10){
                    el = (el - 10) + 1;
                    multipledNumbers +=el;
                }else{
                multipledNumbers += el;
                }
                pairIndex++;
            }
        }
        const finalLuhnaValue = notMultipledNumber + multipledNumbers;
        return finalLuhnaValue%10 === 0 ? true : false;
    }

    // Display Output
    function cardNameOutput(el, val){
        return el.innerText = `Card ID: ${val}`;
    }
    function cardIDOutput(el, val){
        return el.innerText = `Number: ${val}`;
    }


const firstAttempt = firstPrompt();
cardValidation(firstAttempt);
