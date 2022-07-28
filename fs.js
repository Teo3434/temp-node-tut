/*
const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second)
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
     { flag: 'a'}
    )

console.log('done with this task')
console.log('starting the next one')
// async
*/
console.log('start');
const {readFile, writeFile} = require('fs');
readFile('./content/first.txt','utf8',(err,result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err) {
            console.log(err)
            return
        }
        const second = result;
writeFile('./content/result-sync.txt',
`Here is the result : ${first}, ${second}`, (err,result=>{
    if(err) {
        console.log(err)
        return
    }
    console.log('done with this task');
})
)
    })

}
)
console.log('starting next task')