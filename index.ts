import { Server as SocketServer } from 'socket.io'
import morgan from 'morgan'
import express from 'express'
import http from 'http'
import cors from 'cors'

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server, {
  cors: {
    origin: 'http://localhost:5173'
  }
})
const port = 3001

app.use(cors())
app.use(morgan('dev'))

io.on('connection', (socket) => {
  socket.on('message', (message) => {
    socket.broadcast.emit('message', {
      body: message,
      from: socket.id
    })

    console.log('message :>> ', message)
  })
})

server.listen(port, () => {
  console.log(`Estoy ejecutandome en http://localhost:${port}`)
})
