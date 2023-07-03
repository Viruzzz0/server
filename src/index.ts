import { Server as SocketServer } from 'socket.io'
import { config } from 'dotenv'
// import ServerConnection from './db'
import morgan from 'morgan'
import express from 'express'
import http from 'http'
import cors from 'cors'
import sockets from './sockets'

config()
// ServerConnection()
const url = process.env.URL_WEB
const port = process.env.PORT
const app = express()
const server = http.createServer(app)
const io = new SocketServer(server, {
  cors: {
    origin: url
  }
})

app.use(cors())
app.use(morgan('dev'))
sockets(io)

server.listen(port, () => {
  console.log(`Estoy ejecutandome en http://localhost:${port}`)
})
