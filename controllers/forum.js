const express = require('express')
const jwt = require('jsonwebtoken')
const Question = require('../models/ForumQuestionSchema')
const Comment = require('../models/ForumCommentSchema')
const User = require('../models/UserSchema')
const Admin = require('../models/AdminSchema')
const router = express.Router()

router.get('/pending', async (request, response) => {
  const questions = await Question.find({ isAnswered: false }).populate('user')
  response.json(questions)
})

router.get('/answered', async (request, response) => {
  const answered = await Question.find({ isAnswered: true }).populate({
    path: 'comments',
    model: 'Comment',
    populate: {
      path: 'user',
      model: 'User'
    }
  })
  response.json(answered)
})

router.post('/', async (request, response) => {
  const question = new Question(request.body)
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)

  if (!question.title || !question.question) {
    return response.status(400).send({ error: 'title or question missing' })
  }
  if (!question.likes) {
    question.likes = 0
  }
  if (!question.date) {
    question.date = new Date().toISOString()
  }
  question.user = user
  const savedQuestion = await question.save()

  user.questions = user.questions.concat(savedQuestion._id)
  await user.save()

  response.status(201).json(savedQuestion)
})

router.put('/:id', async (req, res) => {
  const body = req.body
  const answeredPost = await Question.findByIdAndUpdate(req.params.id, { isAnswered: true, answer: body.answer }, { new: true })
  res.json(answeredPost)
})

router.put('/addcomment/:id', async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)
  const toAdd = {
    content: request.body.comment
  }
  const comment = new Comment(toAdd)

  comment.user = user
  const savedComment = await comment.save()

  user.comments = user.comments.concat(savedComment._id)
  await user.save()

  const commentAdded = await Question.findByIdAndUpdate(request.params.id, {
    $push: { comments: comment }
  }, { new: true }).populate({
    path: 'comments',
    model: 'Comment',
    populate: {
      path: 'user',
      model: 'User'
    }
  })
  response.json(commentAdded)
})

router.put('/heart/:id', async (req, res) => {
  const body = req.body
  const heartAdded = await Question.findByIdAndUpdate(req.params.id, body)
  res.json(heartAdded)
})

module.exports = router