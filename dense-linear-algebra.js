var fs = require('fs');
eval(fs.readFileSync('common/common_rand.js')+'');
eval(fs.readFileSync('dense-linear-algebra/lud/build/js/lud.js')+'');
ludRun(1024);
