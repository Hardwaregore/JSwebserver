const http = require('http')
const port = 80
const fs = require('fs')

const server = http.serve(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Not found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if (error) {
        console.log('Something happened...')
        console.log('Shutting down the server...')
        console.log('Node JS has shut down because of an error: ' + error)
    } else {
        console.log('Node JS serving on port ' + port +'.')
    }
})