const {readFileSync, writeFileSync}  = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second)


//create file . if not available then create one or rewrite

writeFileSync(
    './content/result-sync', 
    `Here is the result 2 : ${first}, ${second}`,
   {flag: 'a'} //appends to existing file
   
   )

   console.log('done with the task');
   console.log('starting with the next one');