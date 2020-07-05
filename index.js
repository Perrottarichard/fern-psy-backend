require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();

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
app.use(express.json());
app.use(express.static('build'))

app.get('/api', (req, res) => {
  res.send('<h1>Welcome to the backend!</h1>')
})


const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})