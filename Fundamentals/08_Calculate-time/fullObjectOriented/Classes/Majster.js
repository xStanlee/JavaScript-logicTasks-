class Majster {
  
  _fullTime = 44264;

  constructor(lessons, part, seconds = 0){
    this.lessons = lessons;
    this.part = part;
    this.seconds = seconds;

    this.calcSeconds();
  }

  get minutes() {
    const residueSec = this.seconds%60;
    const minutes = (this.seconds - residueSec)/60;
    return minutes%60;
  }
  get hours() {
    const residueSec = this.seconds%60;
    const minutes = (this.seconds - residueSec)/60;
    return (minutes - minutes%60)/60;
  }
  get percentage() {
    return Math.round((this.seconds / this._fullTime) * 100) + '%';
  }

  calcSeconds() {
    for(const lesson of this.lessons) {
      if(lesson.name.startsWith(this.part)) {
        let [minutes, seconds] = lesson.length.split(':');
        
        this.seconds += Number(minutes)*60;
        this.seconds += Number(seconds);
      }
    }
  }
}

module.exports = Majster;
