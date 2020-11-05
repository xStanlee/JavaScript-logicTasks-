/*
    Tutaj piszemy / modyfikujemy kodzik tylko w klasie Timer !
    Dowolnie

    Jednak tylko w klasie !
*/
class Timer {
  constructor(total) {
    this.total = this.calcSeconds(total);
  }
  get minutes() {
    return (this.total - this.total%60)/60
  }
  get seconds() {
    return this.total%60
  }
  addSeconds(sec) {
    this.total += sec;
  }
  
  calcSeconds(sec) {
    const minSecArray = sec.split(':');
    const properMinSec = minSecArray.map(el => Number(el));
    const minutesToSeconds = properMinSec[0] * 60;
    properMinSec[0] = minutesToSeconds;
    return properMinSec.reduce((sum, curr) => sum + curr);
  }
}
exports.Timer = Timer;
