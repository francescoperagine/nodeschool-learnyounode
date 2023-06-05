const fs = require('fs')
const path = require('path')

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) return callback(err)

        let list = files.filter(function (file) {
            return path.extname(file) === '.' + ext
        })
        callback(null, list)
        })
    }