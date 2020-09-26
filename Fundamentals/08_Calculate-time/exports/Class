class Majster{
  constructor(name, seconds, minutes = 0){
    this.name = name;
    this.minutes = minutes;
    this.seconds = seconds;

    this.hours = 0;
  }

  calcMinutes(){
      let restOfSeconds = this.seconds % 60;
      this.seconds -= restOfSeconds;
      this.minutes += Math.round(this.seconds/60);
      this.seconds = restOfSeconds;
    }
  
  calcHours(){
    let restOfMinutes = this.minutes % 60;
    this.minutes -= restOfMinutes;
    this.hours = Math.round(this.minutes / 60);
    this.minutes = restOfMinutes; 
  }

  goodOrNo(){
    return console.log(`${this.name}: Not bad?`);
  }
}

module.exports = Majster;
