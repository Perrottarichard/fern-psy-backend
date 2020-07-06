const express = require('express')
const Contact = require('../models/ContactSchema')

const router = express.Router()

router.post('/', async (request, response) => {

  const contact = new Contact(request.body)
  await contact.save()
  response.status(200).send(contact)

})

module.exports = router