var fs = require('fs');
eval(fs.readFileSync('common/common_rand.js')+'');
eval(fs.readFileSync('n-body-methods/lavamd/build/js/lavamd.js')+'');
runLavaMD(6);
