const net = require('net')
const port = process.argv[2]
const nl = "\n"

net.createServer((socket) => {
    let date = new Date()
    let fullDate = [
        date.getFullYear(), 
        twoDigits(date.getUTCMonth() + 1),
        twoDigits(date.getDate())
    ].join('-')
    let time = twoDigits(date.getHours()) + ":" + twoDigits(date.getMinutes())
    let timestamp = [fullDate, time].join(' ')
    socket.end(timestamp + nl)
}).listen(port).on("error", console.error)

function twoDigits(date) {
    return String(date).padStart(2, '0')
}