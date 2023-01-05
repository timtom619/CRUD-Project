const dotenv = require('dotenv').config({path: __dirname+'/config/.env'})

const express = require('express');
const app = express()
const cors = require('cors')

const PORT = process.env.PORT

app.use(cors())
app.use(express.static('public'))

// serves index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

// responds with rock, paper, or scissors
app.get('/computerChoice', (req, res) => {
    const computerChoices = ['rock', 'paper', 'scissors']
    const computerChoice = computerChoices[Math.floor( Math.random() * 3 )] 
    res.json(computerChoice)
})

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})