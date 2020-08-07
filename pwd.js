module.exports = function (done) {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd === 'pwd') {
        process.stdout.write('You typed: ' + cmd);
        done(process.cwd());
    }
  });
};
