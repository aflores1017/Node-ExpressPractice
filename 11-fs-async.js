const {readFile, writeFile} = require('fs')

readFile('./Content/SubFolder/first.txt','utf8',(err,result)=>{
    if(err){
        console.log("something went wrong")
        return
    }
    const first = result;
    readFile('./Content/SubFolder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log("something went wrong")
            return
        }
        const second = result;
        writeFile('./Content/SubFolder/result.txt',
        `Here is the result: ${first} and ${second}`
        ,(err,result)=>{
            if(err){
                console.log('something wrong')
                return
            }
            console.log(result)
        })
    })
})
    
    