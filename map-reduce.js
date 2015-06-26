var fs = require('fs');
eval(fs.readFileSync('common/common_rand.js')+'');
eval(fs.readFileSync('map-reduce/page-rank/build/js/pagerank.js')+'');
runPageRank(5000, 10, 0.00000001, 100000);
