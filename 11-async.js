const { log } = require('console');
const { readFile , writeFile } = require('fs')

readFile('./content/first.txt', 'utf8' ,(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const fi = result
    readFile('./content/second.txt', 'utf8' ,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const se = result
        writeFile('./content/writeasync.txt',
        `here is the wroten text : ${fi} ,${se}`,
        (err,result) => {
            if(err){
            console.log(err);
            return;
        }
        console.log(result)

        })
    })
})