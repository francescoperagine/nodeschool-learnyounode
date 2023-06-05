let http = require('http')
const bl = require('bl')
let results = []
let count = 0

function print() {
    for(i = 0; i < process.argv.length -2; i++) {
        console.log(results[i])
    }
}

function getReq(index) {
    http.get(process.argv[2+index], (response) => {
        response.pipe(bl((err, data) => {
            if(err) return console.error(err)
            results[index] = data.toString()
            count++
            if (count == 3) print()
        }))
    })
} 

for(i = 0; i < process.argv.length -2; i++) {
    getReq(i)
}