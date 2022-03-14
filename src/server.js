const express = require('express')
const server = express()
const port = 3000

server.get('/device', (req, res) => {
    res.send('Hello World!')
})

server.post('/device', (req, res) => {
    res.send('post request')
})

server.put('/device', (req, res) => {
    res.send('put request')
})

server.delete('/device', (req, res) => {
    res.send('delete request')
})

server.listen(port, ()=>{
    console.log(`O servidor está sendo executado em ${port}`)
})
