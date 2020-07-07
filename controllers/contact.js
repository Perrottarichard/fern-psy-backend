const express = require('express')
const Contact = require('../models/ContactSchema')

const router = express.Router()

//handle posts from contact form
router.post('/', async (request, response) => {
  const body = request.body
  const contact = new Contact({
    name: body.name,
    LINE: body.LINE,
    email: body.email,
    message: body.message,
    date: Date.now(),
    hidden: false
  })
  await contact.save()
  response.status(200).send(contact)
})

//get all contact entries from DB
router.get('/', async (req, res) => {
  const contacts = await Contact.find({})
  res.status(200).send(contacts)
})

router.put('/:id', async (req, res) => {
  const modifiedContact = req.body
  const updatedContact = await Contact.findByIdAndUpdate(req.params.id, { hidden: modifiedContact.hidden }, { new: true })
  res.status(200).send(updatedContact)
})

module.exports = router