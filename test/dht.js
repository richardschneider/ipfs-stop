const run = require('..')

const options = {
  EXPERIMENTAL: {
    dht: true
  }
}
  
const ipfs = run(options)
