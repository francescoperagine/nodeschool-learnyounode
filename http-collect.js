let http = require('http')
const bl = require('bl')
let URL = process.argv[2]

http.get(URL, (response) => {
    response.setEncoding("utf8")
    response.pipe(bl((err, data) => {
        if(err) console.error
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})