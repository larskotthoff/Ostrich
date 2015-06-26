var fs = require('fs');
eval(fs.readFileSync('branch-and-bound/nqueens/build/js/nqueens.js')+'');
runNQueens(16);
