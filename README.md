# RATE-LIMITING

## simple counter fires callback when reach limit

```bash
npm install rate-limiting-counter -S
```

```js
const Counter = require('rate-limiting-counter')

const counter = new Counter({
  interval: 1000 // every seconds to reset inner count,
  max: 100 // max count in one loop,
  onReachLimit: () => {} // callback when hit limit in one loop,
  autoStart: true // if start the counter loop when constructor has called
})

counter.add() // add 1 to inner count
counter.stop() // stop counter
counter.resume() // resume counter
```
