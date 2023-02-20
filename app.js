const file = require('./filehandle')
const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/about'){
        res.end('<h1>About</h1>')
    }
    if(req.url === '/check'){
        res.end('<h1>ABCD</h1>')
    }
})
server.listen(5000)
