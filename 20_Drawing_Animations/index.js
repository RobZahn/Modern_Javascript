// Query Selectors
const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start-btn');
const pauseBtn = document.querySelector('#pause-btn');
const circle = document.querySelector('circle');

// Circle config
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
let duration;

const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart(totalDuration) {
    duration = totalDuration;
  },

  onTick(timeRemaining) {
    circle.setAttribute(
      'stroke-dashoffset',
      (perimeter * timeRemaining) / duration - perimeter
    );
  },

  onComplete() {
    console.log('Timer completed');
  }
});
