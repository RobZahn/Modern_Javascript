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
    this.pauseBtn.addEventListener('click', this.pause);
  }

  start = () => {
    this.tick();
    this.intervalID = setInterval(this.tick, 1000);
    this.startBtn.disabled = true;
  };

  pause = () => {
    clearInterval(this.intervalID);
    this.startBtn.disabled = false;
  };

  tick = () => {
    this.timeRemaining -= 1;
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    return (this.durationInput.value = time);
  }

  onDurationChange() {}
}

const timer = new Timer(durationInput, startBtn, pauseBtn);
