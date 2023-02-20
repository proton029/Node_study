const file = require('./filehandle')
const http = require('http')

const server = http.createServer((req,res)=>{
    res.write("dksdjd")
    res.end();
})
server.listen(5000)
