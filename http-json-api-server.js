const http = require('http')
const url = require('url')

const port = +process.argv[2]

const parsetime = '/api/parsetime'
const unixtime = '/api/unixtime'

http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true)
    const timestamp = new Date(parsedUrl.query.iso)

    response.writeHead(200, { 'Content-Type': 'application/json' })
    result = null
    if(parsedUrl.pathname == parsetime) result = getTime(timestamp)
    if(parsedUrl.pathname == unixtime) result = getUnixTime(timestamp)
    if(result) {
        response.write(JSON.stringify(result))
        response.end()
    } else {
        response.writeHead(404)
        response.end()
    }

}).listen(port).on("error", console.error)


function getTime(timestamp) {
    return {
        "hour": timestamp.getHours(),
        "minute": timestamp.getMinutes(),
        "second": timestamp.getSeconds()
    }
}

function getUnixTime(timestamp) {
    return {
        "unixtime" : timestamp.getTime()
    }    
}