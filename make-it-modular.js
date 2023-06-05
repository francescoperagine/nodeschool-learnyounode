const folder = process.argv[2]
const ext = process.argv[3]

const mymodule = require('./mymodule.js')

mymodule(folder, ext, (err, list) => {
    if(err) return console.error("Something went wrong: ", err)
    list.forEach(element => {
        console.log(element)
    });
})