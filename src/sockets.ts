interface Message {
  body: string
  room: string
  from: string | number
}

export default (io: any): void => {
  io.on('connection', async (socket: any) => {
    const userId = 'tota'

    socket.on(userId, (message: Message) => {
      socket.join(message.room)
      socket.broadcast.emit(message.room, message)
      console.log(`Mensaje recibido en ${message.room}: ${message.body}`)
    })
  })
}
