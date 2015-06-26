var fs = require('fs');
eval(fs.readFileSync('common/common_rand.js')+'');
eval(fs.readFileSync('graph-traversal/bfs/build/js/bfs.js')+'');
BFSGraph(3000000);
