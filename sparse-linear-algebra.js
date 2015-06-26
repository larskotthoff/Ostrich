var fs = require('fs');
eval(fs.readFileSync('common/common_rand.js')+'');
eval(fs.readFileSync('sparse-linear-algebra/spmv/build/js/spmv.js')+'');
spmvRun(50000, 2000, 0.01, 100);
