require("dotenv/config")
const express = require("express")
const userRoute = require("./routes/user.routes")
const {connectMongoDb} = require("./db/connection")

const app = express()
const PORT = process.env.PORT || 3000

connectMongoDb(process.env.MONGODB_URL)

app.use(express.json())

app.get("/",(req, res)=>{
    res.status(200).send("health check  passed: server is is is active")

})



app.use("/user",userRoute)

app.listen(PORT, ()=>{console.log("server is start on 3000")})