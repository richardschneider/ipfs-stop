const run = require('..')

const options = {
  EXPERIMENTAL: {
    relay: true
  }
}
  
const ipfs = run(options)
