let request = require('request')

module.exports = function(done) {
  console.log('curl')
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd.startsWith('curl')) {
      let url = cmd.slice(5)
      request(url,function (error, response, body) {
        // console.error('error:', error);
        // console.log('statusCode:', response && response.statusCode);
        // console.log('body:', body);
        done(body)
      })
    }
  })
}
