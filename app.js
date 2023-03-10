const http = require('http')
// import html file
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('Hello World')
    res.end()
})

server.listen(port, function(error){
    if(error){
        console.log('something went wrong', error)
    } else {
        console.log('Serve listening on port', port)
    }
})