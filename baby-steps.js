let arr = process.argv.slice(2)
let total = 0
for(i = 0;i<arr.length; i++) {
    total += Number(arr[i])
}
console.log(total)