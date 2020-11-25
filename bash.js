let pwdvar = require('./pwd');
let lsvar = require('./ls');
let catvar = require('./cat');
let curlvar = require('./curl');

process.stdout.write('prompt > ');

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};

lsvar(done);
pwdvar(done);
catvar(done);
curlvar(done);
