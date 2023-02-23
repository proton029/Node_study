const file = require('./filehandle')
const event = require('./eventLearn')
const http = require('http')

// const server = http.createServer((req,res)=>{
//     if(req.url === '/about'){
//         res.end('<h1>About</h1>')
//     }
//     if(req.url === '/check'){
//         res.end('<h1>ABCD</h1>')
//     }
// })
const server =http.createServer()
server.on('request',(req,res)=>{
    res.end("Hello");
})
server.listen(5000)
