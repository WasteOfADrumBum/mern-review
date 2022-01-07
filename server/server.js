const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const path = require('path')
require('dotenv').config({ path: './config.env' })

app.use(express.json())
app.use(cors())

// DB Connection
mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected!'))
  .catch((err) => console.log(err))

// API Routes
app.use('/api/review', require('./routes/reviewRoutes'))

if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('/client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'))
  })
}

// PORT
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
