
let fs = require('fs');

module.exports = function (done) {
  console.log('ls')
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'ls') {
      fs.readdir('./', 'utf8', (err, files) => {
        if (err) {
          done(err);
        } else {
          done(files.join('\n'));
        }
      });
    }
  });
};
