import express from 'express'
import path from 'path'
import url from 'url'
import methodLogger from './middleware/methodColors.js'
import { posts } from './controllers/postController.js'
import { router } from './routes/posts.js'


const PORT = process.env.PORT
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express(); 

app.set("views", "views")
app.set("view engine", "ejs")

//body parsing
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//css
app.use(express.static('public'))

//logger
app.use(methodLogger)

app.use('/', router)


app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`)
})