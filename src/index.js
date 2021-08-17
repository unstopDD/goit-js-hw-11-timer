import './styles.css';

const refs = {
  clockface: document.querySelector('timer'),
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector = '#timer-1', targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    const updateClockface = () => {
      const currentTime = Date.now();

      const delta = this.targetDate - currentTime;

      clock(delta);
    };
    updateClockface();
    setInterval(updateClockface, 1000);
  }
}

function clock(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('December 31, 2021'),
});
timer.start();
