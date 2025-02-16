const express = require('express')
const app = express()
const aiRoutes = require("./Routes/ai.routes")
const cors = require('cors')

app.use(express.json())
app.use(cors())

const allowedOrigins = [
  'https://ai-powered-code-reviewer-1.onrender.com', // Frontend URL
];

const corsOptions = {
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

app.get('/', (req, res)=>{
    res.send('hellow world')
})

app.use('/ai', aiRoutes)


module.exports = app;
