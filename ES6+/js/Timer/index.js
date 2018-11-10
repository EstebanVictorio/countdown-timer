export default class Timer{
  constructor({days,hours,minutes,seconds}){
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.containers = document.querySelectorAll('.counter');
    this.intervalID = 0;
    this.tick = this.tick.bind(this);
    this.getTick = this.getTick.bind(this);
    this.tickSeconds = this.tickSeconds.bind(this);
    this.tickMinutes = this.tickMinutes.bind(this);
    this.tickHours = this.tickHours.bind(this);
    this.tickDays = this.tickDays.bind(this);
    this.containers[0].innerHTML = this.days;
    this.containers[1].innerHTML = this.hours;
    this.containers[2].innerHTML = this.minutes;
    this.containers[3].innerHTML = this.seconds;
  }

  tick(){
    this.tickSeconds();
  }

  hasCountdownEnded(){
    return this.days == 0 &&
      this.hours == 0 &&
      this.minutes == 0 &&
      this.seconds == 0;
  }

  getTick(value){
    return value == 0 ? 59 : (value - 1);
  }

  tickSeconds(){
    this.seconds = this.getTick(this.seconds);
    if(this.seconds == 59){
      this.tickMinutes();
    }
    this.containers[3].innerHTML = this.seconds;
    if(this.hasCountdownEnded()){
      clearInterval(this.intervalID);
      alert('Countdown Ended');
    }
  }

  tickMinutes(){
    this.minutes = this.getTick(this.minutes);
    if(this.minutes == 59){
      this.tickHours();
    }
    this.containers[2].innerHTML = this.minutes;
  }

  tickHours(){
    this.hours = this.getTick(this.hours);
    if(this.hours == 59){
      this.tickDays();
    }
    this.containers[1].innerHTML = this.hours;
  }

  tickDays(){
    this.days--;
    this.containers[0].innerHTML = this.days;
  }

}
