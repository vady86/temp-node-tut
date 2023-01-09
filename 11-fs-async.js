const {readFile, writeFile } = require('fs')
console.log('Start')

readFile('./content/first.txt','utf8'
,(err, result)=>{
    if(err){
        console.log(err)
        return
    }
    //console.log(result)

   
    const first = result;

    readFile('./content/second.txt','utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }

        const second = result
    

        writeFile('./content/result-async.txt',
        `Here is the async result  : ${first}, ${second}`,
        {flag: 'a'}, //appends to existing file)
         (err, result)=>{
           if(err){
              console.log(err)
              return
          }
    
         console.log('done with the task')})
         } )
        }
)

        console.log('starting with next task')