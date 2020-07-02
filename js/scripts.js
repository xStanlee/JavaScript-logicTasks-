/***********************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index, which is calculated using the formula:
BMI = mass / height^2 where mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John
4. Print a string to the console containing the bariable from step 3. (Something like "Is Mark's BMI higher than John's? true").
*/

var markHeight = 1.85;
var markWeight = 92;
var jhonHeight = 1.70;
var jhonWeight = 98;

var calcBMI = function(mass, height) {
    var BMI = mass / Math.pow(height, 2);
    return BMI;
}

var outputBMI = function(name, bmi) {
    console.log(`${name} bmi is around ${bmi}`);
}

var isMark = function(bmiMark, bmiJhon) {
    if (bmiMark > bmiJhon){
        console.log('Is Mark\'s BMI higher than John\'s? true');
    }else{
        console.log('Is Mark\'s BMI higher than John\'s? false');
    }
}

console.log('##############################');
console.log('##### CODING CHALLENGE 1 #####');
console.log('##############################');
console.log('                              ');

outputBMI('Mark', calcBMI(markWeight, markHeight));
outputBMI('Jhon', calcBMI(jhonWeight, jhonHeight));
isMark(calcBMI(markWeight, markHeight), calcBMI(jhonWeight, jhonHeight));
console.log('                              ');
/***********************************
* CODING CHALLENGE 2
*/

/*
Jhon and Mike both play basketball in different teams. In the lastest 3 games, Jhon's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw.
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the consle.
5. Like before, change the scores to generete different winners, keeping in mind there might be draws.
*/

var jhonGames = [89, 120, 103];
var mikeGames = [89, 120, 103];
var meryGames = [97, 134, 105];

var averageScore = function(games){
    let sum = 0;
    for (var i = 0; i < games.length; i++){
        sum+=games[i];
    }
    const average = sum / games.length;
    return average;
}

var whoWin = function(p1, p2, p3){
    if(p1 > p2 && p1 > p3){
        console.log(`${p1.name} whoop all asses with score ${p1.avgScore}!`);
    }else if (p2 > p1 && p2 > p3){
        console.log(`${p2.name} whoop all asses with score ${p2.avgScore}!`);
    }else if (p3 > p1 && p3 > p2){
        console.log(`${p3.name} whoop all asses with score ${p3.avgScore}!`);
    }else{
        console.log('There\'s no winner. We need play-offs');
        console.log(`${p1.name} end with average score: ${p1.avgScore}`)
        console.log(`${p2.name} end with average score: ${p2.avgScore}`)
        console.log(`${p3.name} end with average score: ${p3.avgScore}`)
    }
}

class Player {
    constructor(name, avgScore){
        this.name = name;
        this.avgScore = avgScore;
    }
}
var jhon = new Player('Jhon', averageScore(jhonGames));
var mike = new Player('Mike', averageScore(mikeGames));
var mery = new Player('Mery', averageScore(meryGames));



console.log('##############################')
console.log('##### CODING CHALLENGE 2 #####')
console.log('##############################')
console.log('                              ');

whoWin(jhon, mike, mery);
console.log('                              ');


/***********************************
* CODING CHALLENGE 3
*/

/* 
John and his family went on a holiday and went to 3 different restaurants. The bill were $124, $48, $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill 
when the bill is less than 50$, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip)

*/

var jhonBills = [124, 48, 268];
var jhonTaxes = jhonBills.map(function(x) {
   if (x<50){
       return x * 0.2;
   }else if (x >= 50 && x <= 200){
       return x * 0.15;
   }else { return x * 0.1};
});
var billWithTaxes = [];
for (var i = 0; i < jhonBills.length; i++){
    var el = jhonBills[i] + jhonTaxes[i]
    billWithTaxes.push(el);
}

console.log('##############################')
console.log('##### CODING CHALLENGE 3 #####')
console.log('##############################')
console.log('                              ');

console.log(jhonTaxes);
console.log(billWithTaxes);
console.log('                              ');


/***********************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement
the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it
from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI.
Don't forget they might have the same BMI.

BMI = mass / height^2

*/

class Person {
    constructor(name, mass, height){
        this.name = name;
        this.mass = mass;
        this.height = height;
    }
    
    get bmi() {
        return this.calculateBMI();
    }
    
    calculateBMI() {
        return this.mass / Math.pow(this.height, 2);
    }
}

var highestBMI = function(bmiA, bmiB){
    if(bmiA.bmi > bmiB.bmi){
        console.log(`${bmiA.name} have higher bmi than ${bmiB.name} and it's equal too ${bmiA.bmi}`)
    }else if(bmiA.bmi < bmiB.bmi){
         console.log(`${bmiB.name} have higher bmi than ${bmiA.name} and it's equal too ${bmiB.bmi}`)
    }else{
        console.log(`The BMIs of ${bmiA.name} and ${bmiB.name} are equal and they `)
    }
}

console.log('##############################')
console.log('##### CODING CHALLENGE 4 #####')
console.log('##############################')
console.log('                              ');

var Jhonnie = new Person('Jhon', 98, 1.70);
var Marky = new Person('Mark', 92, 1.85);

console.log(Jhonnie.bmi);
console.log(Marky.bmi);
highestBMI(Jhonnie, Marky);
console.log('                              ');

/***********************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180
and $42.
Jhon likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50
and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:

1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create:
    a) New array containing all tips
    b) New array containing final paids.
    
EXTRA AFTER FINISHING:
Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110 and $45.
Mark likes to to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300
and 25% if the bill is more than $300(different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

*/

class Payer{
    constructor(name, bills){
        this.name = name;
        this.bills = bills;
    }
    
    get tips() {
        return this.calcTips();
    }
    
    calcTips() {
        if (this.name === 'Jhon'){
            var tips = this.bills.map(function(x){
                if (x<50){
                    return x * 0.2;
                }else if (x >= 50 && x <= 200){
                    return x * 0.15;
                }else { return x * 0.1};
            });
            return tips;
        }else{
            var tips = this.bills.map(function(x){
                if (x<100){
                    return x * 0.2;
                }else if (x >= 100 && x < 300){
                    return x * 0.1;
                }else {
                    return x * 0.25;
                }
            });
            return tips;
        }
    }
}

var jhonBills = [124, 48, 256, 180, 42];
var markBills = [77, 375, 110, 45];

var fullPrice = function(arrCheck, arrTips){
    var lenOfArr = arrCheck.length
    var full = []
    for (var i = 0; i < lenOfArr; i++){
        var each = arrCheck[i] + arrTips[i];
        full.push(each);
    }
    return full;
}

var averageFull = function(arrTips){
    var lenOfArr = arrTips.length;
    var sum = 0;
    for (var i = 0; i < lenOfArr; i++) {
        sum += arrTips[i];
    }
    return sum/lenOfArr;
}

console.log('##############################')
console.log('##### CODING CHALLENGE 5 #####')
console.log('##############################')
console.log('                              ');

var jhonnyBills = new Payer('Jhon', jhonBills);
var markiBills = new Payer('Mark', markBills);

// Tips Array()

console.log(jhonnyBills.tips);
console.log(markiBills.tips);

// Full price Array()

console.log(fullPrice(jhonBills, jhonnyBills.tips));
console.log(fullPrice(markBills, markiBills.tips));

// Average tip of sum Array()

console.log(`${jhonnyBills.name} average of all bills is equal to ${averageFull(jhonnyBills.tips)}`);
console.log(`${markiBills.name} average of all bills is equal to ${averageFull(markiBills.tips)}`);
