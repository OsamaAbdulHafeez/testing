import express from 'express'


const app = express()

app.get("/", (req,res)=>{
    res.send("Connected Hogaya")
});
app.listen(3000,(req,res)=>{
    console.log("Server Connected")
})