const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

//making cleaner

const start = async () => {
  try {
    const first = await readFilePromise("./content/read_file.txt", "utf8");
    const second = await readFilePromise("./content/write_file.txt", "utf8");
    await writeFilePromise(
      "./content/result-mind-grenade.txt",
      `this is: ${first} and that is ${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();

module.exports = { start };

// const getText = (path)=>{
//     return new Promise((resolve,reject) =>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }

// getText('./content/read_file.txt')
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err))
