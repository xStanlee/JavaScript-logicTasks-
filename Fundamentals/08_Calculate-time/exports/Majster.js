class Majster{

  _fullTime = 44264;

  set fullTime(val) {
    this._fullTime = val;
  }
  
  constructor(name, seconds, minutes = 0){
    this.name = name;
    this.seconds = seconds;
    this.minutes = minutes;

    this.hours = 0;
    this.percentage = 0;
  }

  calcPercentage() {
    this.percentage = Math.round((this.seconds / this._fullTime) * 100) + '%';
  }

  calcMinutes() {
      this.calcPercentage();
      let restOfSeconds = this.seconds % 60;
      this.seconds -= restOfSeconds;
      this.minutes += Math.round(this.seconds/60);
      this.seconds = restOfSeconds;
    }
  
  calcHours() {
    let restOfMinutes = this.minutes % 60;
    this.minutes -= restOfMinutes;
    this.hours = Math.round(this.minutes / 60);
    this.minutes = restOfMinutes; 
  }

  goodOrNo() {
    return console.log(`${this.name}: Not bad?`);
  }
}

module.exports = Majster;
