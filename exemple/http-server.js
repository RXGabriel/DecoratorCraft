import http from 'http'

function handleRequest(req, res) {
    res.end('Hello World!')
}
const server = http.createServer(handleRequest)
const port = 3000
server.listen(port, () => {
    console.log('server running at', server.address().port)
})