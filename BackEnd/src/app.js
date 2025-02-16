const express = require('express')
const app = express()
const aiRoutes = require("./Routes/ai.routes")
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.send('hellow world')
})

app.use('/ai', aiRoutes)


module.exports = app;