const http = require('http')
const map = require('through2-map')

const port = +process.argv[2]

http.createServer((request, response) => {
    if (request.method != 'POST') 
        return response.end("send a post")
    response.writeHead(200, {'content-type': 'text/plain'})
    request.pipe(map((chunk) => {
        return chunk.toString().toUpperCase()
    })).pipe(response)

}).listen(port).on("error", console.error)

