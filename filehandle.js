const {readFile} = require('fs')

const getText = (path)=>{
    return new Promise((resolve,reject) =>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })
}

// getText('./content/read_file.txt')
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err))

//making cleaner

const start=async()=>{
    try{
        const first = await getText('./content/read_file.txt')
        const second = await getText('./content/write_file.txt')
        console.log(first,second);
    }catch(error){
        console.log(error);
    }
    
    
}
start()



module.exports ={getText}

