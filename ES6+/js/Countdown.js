import Timer from 'Timer';

let timerConfig =
{
  days: 1,
  hours: 0,
  minutes: 0,
  seconds: 0
};

let timer = new Timer(timerConfig);

timer.intervalID = setInterval(timer.tick,1000);
