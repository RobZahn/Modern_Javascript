// Query Selectors
const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start-btn');
const pauseBtn = document.querySelector('#pause-btn');

// Timer Class

class Timer {
  constructor(durationInput, startBtn, pauseBtn) {
    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;

    this.startBtn.addEventListener('click', this.start);
  }

  start = () => {
    this.tick();
    setInterval(this.tick, 1000);
  };

  tick = () => {
    console.log('Tick');
  };
  pause() {}

  onDurationChange() {}
}

const timer = new Timer(durationInput, startBtn, pauseBtn);
