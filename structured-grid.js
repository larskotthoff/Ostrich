var fs = require('fs');
//eval(fs.readFileSync('common/common_rand.js')+'');
eval(fs.readFileSync('structured-grid/SRAD/build/js/data.js')+'');
eval(fs.readFileSync('structured-grid/SRAD/build/js/srad.js')+'');
runSRAD(500,1);
