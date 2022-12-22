require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongodb = require('./server-mongodb')


//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(bodyParser.json())

 


// routes/controllers
app.use('/api/products', require('./controllers/ProductController'))


// stats web api
mongodb()
app.listen(port, () => console.log(`WebApi is running on http://localhost:${port}`))