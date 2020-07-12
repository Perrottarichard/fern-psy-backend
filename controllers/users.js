const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const User = require('../models/UserSchema')

//get all users
router.get('/', async (request, response) => {
  const users = await User.find({})
  response.json(users.map(u => u.toJSON()))
})

//post a new user "signup" "register"
router.post('/register', async (request, response) => {
  const { password, name, username, gender, dateOfBirth, email } = request.body

  if (!password || password.length < 5 || !username || !name) {
    return response.status(400).send({
      error: 'password must be at least 8 characters and you must include a username and name'
    })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    name,
    gender,
    dateOfBirth,
    email,
    passwordHash
  })

  const savedUser = await user.save()
  response.json(savedUser)
})

module.exports = router