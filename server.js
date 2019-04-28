require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const productRoutes = require('./routes/product')
const app = express()
const multer = require ('multer')

app.use(cors())
app.use(bodyParser.json())
app.use(multer().any())

mongoose.connect(
  process.env.DB_CLUSTER_URL,
  { useNewUrlParser: true },
  () => {
    console.log('terhubung ke mongodb')
  }
)

app.use('/api/products', productRoutes)

app.listen(8000)
