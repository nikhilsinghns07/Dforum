const Question = require('../models/Question')

exports.postQuestion = async (req,res) => {
    try {
        const question = new Question({
            question : req.body.question
        })
        let newQuestion = await question.save()
        res.status(200).json({data:'success'})
    }catch (err) {
        res.status(500).json({error: err})
    }
}

exports.getquestion = async(req,res) => {
    try {
        Question.find().then(questions => {
            res.status(200).json({questions})
        })
    }catch(err) {
        res.status(500).json({error:err})
    }
}