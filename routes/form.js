const express = require('express')

const formController = require('../controller/form')

const router = express.Router()

router.post('/postQuestion',formController.postQuestion)

router.get('/questions',formController.getquestion)

module.exports = router
