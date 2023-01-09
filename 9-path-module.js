const path = require('path');

console.log(path.sep)


const filePath = path.join('/content','subfolder','test.txt')

console.log(filePath)

const base = path.basename(filePath) // to get the last name in the path
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt' ) // to get the absolute pathme in the path
console.log(absolute)