const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const express = require('express')
const Admin = require('../models/AdminSchema')
const router = express.Router()

//register new admin
// router.post('/api/admin', async (request, response) => {
//   const { password, name, username } = request.body

//   if (!password || password.length < 5 || !username || !name) {
//     return response.status(400).send({
//       error: 'password must be at least 5 characters and must contain username and name'
//     })
//   }

//   const saltRounds = 10
//   const passwordHash = await bcrypt.hash(password, saltRounds)

//   const admin = new Admin({
//     username,
//     name,
//     passwordHash
//   })

//   const savedAdmin = await admin.save()
//   response.json(savedAdmin)
// })

//existing admin login
router.post('/', async (request, response) => {
  const body = request.body
  const admin = await Admin.findOne({ username: body.username })

  const passwordCorrect = admin === null
    ? false
    : await bcrypt.compare(body.password, admin.passwordHash)

  if (!(admin && passwordCorrect)) {
    return response.status(401).json({
      error: 'invalid administrative username and password'
    })
  }

  const userForToken = {
    username: admin.username,
    id: admin._id
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  response.status(200).send({ token, username: admin.username, name: admin.name })
})

module.exports = router