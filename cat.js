let fs = require('fs');

module.exports = function(done) {
  console.log('cat')
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd.startsWith('cat')) {
      let filesArr = cmd.slice(4).split(' ')
      filesArr.forEach(file => {
        fs.readFile(`./${file}`, (err, data) => {
          if (err) {
            done(err);
          } else {
            done(`\n${data}`);
          }
        })
      })
    }
  });
}
