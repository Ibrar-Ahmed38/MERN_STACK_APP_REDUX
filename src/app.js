import express from 'express'
import cors from 'cors'
import  mongoose from 'mongoose'
import postRoutes from './routes/posts.js'
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use('/posts', postRoutes)
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/Memories")
.then( ()=>app.listen(port, ()=> console.log(`Server is Ok http://localhost:${port}`)))
.catch( (err)=> console.log(err,`Server is Out of Order`))



