const express = require('express')
const cors = require('cors')
const app = express()
const bodyparser = require('body-parser')
const PORT = process.env.PORT || 3001
const mongoose = require('mongoose')
const MONGO_URL = 'mongodb+srv://Nikhil0799:Nikhil0799@cluster0.5xymi.mongodb.net/Dforum'
const formRoutes = require('./routes/form')

app.use(cors())
app.use(bodyparser.json())
app.use(formRoutes)

mongoose.connect(MONGO_URL).then(res => {
    console.log('Mongo Running')
}).catch(error => {
    console.log(error)
})

app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`)
})