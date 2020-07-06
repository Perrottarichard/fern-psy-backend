const express = require('express')
const Contact = require('../models/ContactSchema')

const router = express.Router()

router.post('/', async (request, response) => {
  const body = request.body
  const contact = new Contact({
    name: body.name,
    LINE: body.LINE,
    email: body.email,
    message: body.message,
    date: Date.now()
  })
  await contact.save()
  response.status(200).send(contact)

})

module.exports = router