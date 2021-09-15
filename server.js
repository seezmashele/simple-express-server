require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection
const subscribersRouter = require('./routes/subscribers')

db.on('error', (err) => console.error(err))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use('/subscribers', subscribersRouter)

app.listen(4000, () => console.log('Server running'))
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
