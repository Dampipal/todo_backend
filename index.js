const express = require('express')

const app = express()
const PORT = 3003

app.get("/",(req,res)=>{
    res.send("Welcome on ToDo Backend")
})

app.listen(PORT,()=>{
    console.log(`Server is running port ${PORT}`);
})