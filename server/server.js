import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'



// App Config
const PORT = process.env.PORT || 4000
const app = express()

await connectDB()




//API routes
app.get('/', (req, res)=>{
    res.send('Hello World')
})

// Intialize Middlewares
app.use(express.json())
app.use(cors())

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})