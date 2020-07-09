require('dotenv').config();
require('express-async-errors')
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const middleware = require('./middleware')
const loginRouter = require('./controllers/userLogin')
const userRouter = require('./controllers/users')
const forumRouter = require('./controllers/forum')
const adminRouter = require('./controllers/adminLogin')
const contactRouter = require('./controllers/contact')

const app = express()
app.use(middleware.tokenExtractor)

const MONGO_URI = process.env.MONGO_URI
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.error('error connecting to MongoDB:', error.message)
  })


app.use(cors())
app.use(express.json())
app.use(express.static('build'))

app.use('/api/login', loginRouter)
app.use('/api/users', userRouter)
app.use('/api/forum', forumRouter)
app.use('/api/admin', adminRouter)
app.use('/api/contact', contactRouter)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build'))
}).catch(error => console.log(error))

//test the backend router
app.get('/api', (req, res) => {
  res.send('<h1>Welcome to the backend!</h1>')
})

let PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})