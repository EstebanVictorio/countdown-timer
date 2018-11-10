function hasCountdownEnded(){
  return this.days == 0 &&
    this.hours == 0 &&
    this.minutes == 0 &&
    this.seconds == 0;
}

function getTick(value){
  return value == 0 ? 59 : (value - 1);
}

function tickSeconds(){
  this.seconds = getTick(this.seconds);
  if(this.seconds == 59){
    this.tickMinutes();
  }
  this.containers[3].innerHTML = this.seconds;
  if(this.hasCountdownEnded()){
    clearInterval(intervalID);
    alert('Countdown Ended');
  }
}

function tickMinutes(){
  this.minutes = getTick(this.minutes);
  if(this.minutes == 59){
    this.tickHours();
  }
  this.containers[2].innerHTML = this.minutes;
}

function tickHours(){
  this.hours = getTick(this.hours);
  if(this.hours == 59){
    this.tickDays();
  }
  this.containers[1].innerHTML = this.hours;
}

function tickDays(){
  this.days--;
  this.containers[0].innerHTML = this.days;
}

function Timer(days,hours,minutes,seconds){
  this.days = days;
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
  this.containers = document.getElementsByClassName('counter');
  this.containers[0].innerHTML = this.days;
  this.containers[1].innerHTML = this.hours;
  this.containers[2].innerHTML = this.minutes;
  this.containers[3].innerHTML = this.seconds;
}


Timer.prototype.tickSeconds = tickSeconds;
Timer.prototype.tickMinutes = tickMinutes;
Timer.prototype.tickHours = tickHours;
Timer.prototype.tickDays = tickDays;
Timer.prototype.hasCountdownEnded = hasCountdownEnded;

var timer = new Timer(1,0,0,0);

function interval(){
  timer.tickSeconds();
}
var intervalID = setInterval(interval,1000);
