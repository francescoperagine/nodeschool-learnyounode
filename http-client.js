let http = require('http')
let URL = process.argv[2]

http.get(URL, (response) => {
    response.setEncoding("utf8")
    response.on("data", console.log)
    response.on("error", console.error)
})