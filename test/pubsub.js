const run = require('..')

const options = {
  EXPERIMENTAL: {
    pubsub: true
  }
}
  
const ipfs = run(options)
ipfs.once('ready', () => {
  ipfs.pubsub.subscribe('foo', () => { console.log('got message') })
  ipfs.pubsub.publish('foo', Buffer.from('hi'))
})
