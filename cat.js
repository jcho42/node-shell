let fs = require('fs');

module.exports = function(done) {
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

    // if (cmd === 'ls') {
    //   fs.readdir('./', 'utf8', (err, files) => {
    //     if (err) {
    //       throw err;
    //     } else {
    //       process.stdout.write('\n' + files.join('\n'));
    //       process.stdout.write('\npromt > ');
    //     }
    //   });
    // }
  });
}
