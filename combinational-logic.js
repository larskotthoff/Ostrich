var fs = require('fs');
eval(fs.readFileSync('common/common_rand.js')+'');
eval(fs.readFileSync('combinational-logic/crc/build/js/crc.js')+'');
runCRC(128,65536,150);
