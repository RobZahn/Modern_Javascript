// Query Selectors
const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start-btn');
const pauseBtn = document.querySelector('#pause-btn');

// Timer Class
class Timer {
  constructor(durationInput, startBtn, pauseBtn, callbacks) {
    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startBtn.addEventListener('click', this.start);
    this.pauseBtn.addEventListener('click', this.pause);
  }

  enableStartBtn = () => {
    this.startBtn.disabled = false;
  };

  disableStartBtn = () => {
    this.startBtn.disabled = true;
  };

  start = () => {
    if (this.onStart) this.onStart();
    this.tick();
    this.intervalID = setInterval(this.tick, 1000);
    this.disableStartBtn();
  };

  pause = () => {
    clearInterval(this.intervalID);
    this.enableStartBtn();
  };

  tick = () => {
    if (this.timeRemaining > 0) {
      this.timeRemaining -= 1;
      if (this.onTick) this.onTick();
    } else {
      this.pause();
      if (this.onComplete) this.onComplete();
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    return (this.durationInput.value = time);
  }
}

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
