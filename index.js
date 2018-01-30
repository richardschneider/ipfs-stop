const wtf = require('wtfnode')
const IPFS = require('ipfs')


module.exports = (options) => {
  console.log('IPFS starting')
  const ipfs = new IPFS(options)

  function stop () {
    ipfs.stop(() => {
      console.log('IPFS stopped; waiting 5s')
      setTimeout(() => wtf.dump(), 5000)
    })
  }

  ipfs.once('ready', () => {
    console.log('IPFS ready; will stop in 3s')
    setTimeout(stop, 3000)
  })
  
  return ipfs
}
