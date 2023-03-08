const express = require("express")
const notes = require("./Data/notes")
const dotenv = require("dotenv")

const app = express()
dotenv.config()
app.get('/', (req,res)=>{
    res.send("Started MERN Projects")
})

app.get('/api/notes', (req,res)=>{
    res.json(notes)
})
app.get('/api/notes/:id', (req,res)=>{
    res.send(notes.filter((n)=> n._id === req.params.id))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server Started on ${PORT}`))
