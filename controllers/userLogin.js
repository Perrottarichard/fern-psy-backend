const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const express = require('express')
const User = require('../models/UserSchema')
const router = express.Router()


//existing user login
router.post('/', async (request, response) => {
  const body = request.body
  const user = await User.findOne({ email: body.email })

  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(body.password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid email or password'
    })
  }

  const userForToken = {
    email: user.email,
    id: user._id
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  response.status(200).send({ token, email: user.email, _id: user._id })
})

module.exports = router