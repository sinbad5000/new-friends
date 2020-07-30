require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const passport = require("passport")
const bodyParser = require("body-parser")

const app = express()
require('dotenv').config()

const users = require("./routes/api/users")

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
    next()
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


const db = process.env.MONGODB_URI

mongoose.connect( db, {useNewUrlParser: true} ).then((()=>console.log("Mongo is running on", process.env.MONGODB_URI))).catch(err => console.log(err))


app.get("/", function(req, res){
    res.send("hello, World!\nServer is up and running")
})

// passport middleware
app.use(passport.initialize())

// passport JWT token set/config

require("./config/passport")(passport)

//setup our routes

app.use("/api/users", users)

//start server

app.listen(process.env.PORT || 3001, () => console.log(`server is running on ${process.env.PORT}`))