var fs = require('fs');
eval(fs.readFileSync('common/common_rand.js')+'');
eval(fs.readFileSync('unstructured-grid/back-propagation/build/js/backprop.js')+'');
runBackProp(2850000);
