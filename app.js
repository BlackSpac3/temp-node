const http = require('http')

const server = http.createServer((req,res) => {
    console.log(req)
    res.write('Welcome to Blackspac3')
    res.end()


})

server.listen(3000)