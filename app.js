const {readFile} = require('fs')
const file = require('./filehandle')

console.log('started a task');
//check file path
readFile('./content/read_file.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result);
    console.log("complicated task");

})
console.log("next task");
//since readFile is Asynchronous and will offload the call back to the event loop so that it will not block 
//other parallel process. so the first console will run then the last and once the reading is done
// the 2nd console will get printed.