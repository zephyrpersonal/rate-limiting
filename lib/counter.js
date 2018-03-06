class Counter {
  constructor({
    interval = 1000,
    max = 100,
    onReachLimit = () => {},
    autoStart = false
  }) {
    this.count = 0
    this.max = max
    this.interval = interval
    this.onReachLimit = onReachLimit

    if (autoStart) {
      this.start()
    }
  }

  start() {
    this.counter = setInterval(() => {
      this.count = 0
    }, this.interval)
  }

  resume() {
    this.start()
  }

  stop() {
    clearInterval(this.counter)
  }

  add() {
    if (this.count >= this.max) {
      try {
        this.onReachLimit()
      } catch (e) {
        console.error(e)
      }
      return
    }
    this.count += 1
  }
}

module.exports = Counter
