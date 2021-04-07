const http = require('http');
// fins do código: boa prática
// localhost
const hostname = '127.0.0.1';
const port = 3000;
// DNS -> Endereço : Porta IP por trás

const server = http.createServer((req,res)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
});

// template string
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})
