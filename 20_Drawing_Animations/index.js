// Query Selectors
const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start-btn');
const pauseBtn = document.querySelector('#pause-btn');

const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart() {
    console.log('Timer started');
  },

  onTick() {
    console.log('Timer tick');
  },

  onComplete() {
    console.log('Timer completed');
  }
});
