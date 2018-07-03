function myAction(args) { 
    const split = require('split-string')
    var array_splitted = split(args.array)
    return { 
        splitted: array_splitted
    }
} 
exports.main = myAction;
    