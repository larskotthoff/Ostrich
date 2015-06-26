var fs = require('fs');
eval(fs.readFileSync('graphical-models/hmm/build/js/hmm.js')+'');
bwa_hmm('n', 512);
