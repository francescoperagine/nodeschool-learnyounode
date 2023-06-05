const fs = require('fs')
fs.readFile(process.argv[2], function (err, contents) {
    if(!err) {
        const lines = contents.toString().split('\n')
        console.log(lines.length-1)
    }
})
