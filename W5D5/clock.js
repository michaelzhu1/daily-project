class Clock {
  constructor() {
    const date = new Date();

    this.seconds = date.getSeconds();
    this.minutes = date.getMinutes();
    this.hours = date.getHours();
    this.printTime();
    this._tick();
    // this.printTime(this.seconds, this.minutes, this.hours);

    // setInterval(this._tick(), 1000);
    setInterval(this._tick.bind(this), 1000);

  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick(four, five, six) {
    this.seconds++;
    if (this.seconds === 60) {
      this.minutes++;
      this.seconds = 0;
    }
    if (this.minutes === 60) {
      this.hours++;
      this.minutes = 0;
    }
    if (this.hours === 24) {
      this.hours = 0;
    }
    console.log(this);
    this.printTime();
  }

}

const clock = new Clock();
