const express = require ("express")

const app = express()
app.get("/", function (req, res){
    res.send("Hello monillo")
})
app.get("/index", function (req, res){
    res.sendFile(__dirname + "/index.html")
})
app.get("/error", function (req, res){
    res.sendFile(__dirname + "/erorrrrrrrr.PNG")
})
app.listen(3001)
console.log("server port 3001")

