const dotenv = require('dotenv').config({path: __dirname+'/config/.env'})

const express = require('express');
const app = express()
const cors = require('cors')

const PORT = process.env.PORT

app.use(cors())
app.use(express.static('public'))



app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})