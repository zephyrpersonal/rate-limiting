const Counter = require('./index')

const counter = new Counter({
  interval: 2000,
  max: 1,
  onReachLimit() {
    console.log('hit')
  }
})

setInterval(() => counter.add(), 500)
