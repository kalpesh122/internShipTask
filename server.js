const path = require('path')
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const cors = require('cors')

dotenv.config({ path: "./config/config.env.env" })

connectDB()
const product = require("./routes/productRoutes")
const app = express()

app.use(cors())
app.use('/api/v1/products', product)
// app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, console.log(`Server running in ${PORT}`.yellow.bold))

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
})