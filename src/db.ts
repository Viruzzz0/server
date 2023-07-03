import { connect } from 'mongoose'

function ServerConnection(): void {
  const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_DB } = process.env
  const url = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@chat-socket.vqbi9vo.mongodb.net/${MONGODB_DB}?retryWrites=true&w=majority`

  connect(url)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error(err))
}

export default ServerConnection
