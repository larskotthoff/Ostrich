var fs = require('fs');
eval(fs.readFileSync('common/common_rand.js')+'');
eval(fs.readFileSync('dynamic-programming/nw/build/js/needle.js')+'');
runNeedle(4096,1);
