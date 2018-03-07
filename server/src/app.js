const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())//pang worldwide ma access security risks research more next time

//rest service 
app.post('/register', (req,res) =>{
  res.send({
      message: `Hello ${req.body.email}! Your user was registed! Have fun!`
  })
})

app.listen(process.env.PORT || 8081)

