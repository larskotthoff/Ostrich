var fs = require('fs');
eval(fs.readFileSync('common/common_rand.js')+'');
eval(fs.readFileSync('spectral-methods/fft/build/js/fft.js')+'');
runFFT(10);
