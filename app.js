const express = require('express')
const app = express()
require('dotenv').config()
const router = require('./routers')
const PORT = process.env.CONNECTION_PORT


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)


app.listen(PORT, () => console.log('Listening to your heart on port:', PORT))