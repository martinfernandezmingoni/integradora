const express = require('express')
const handlebars = require('express-handlebars')
const mongoConnect = require('../db')
const router = require('./router')
const httpServer = require('./index')
const {Server} = require('socket.io')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')

mongoConnect()
router(app)



const io = new Server(httpServer)

io.on('connection', socket => {
  console.log(`Cliente conectado con id: ${socket.id}`)

  socket.on('newUser', user => {
    socket.broadcast.emit('userConnected', user)
    socket.emit('messageLogs', messages)
  })

  socket.on('message', data => {
    messages.push(data)
    io.emit('messageLogs', messages)
  })
})

module.exports = app