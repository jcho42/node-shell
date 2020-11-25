module.exports = function (done) {
  console.log('pwd')
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd === 'pwd') {
        process.stdout.write('You typed: ' + cmd);
        done(process.cwd());
    }
  });
};
