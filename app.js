//import express

const express = require('express')

const hbs = require('hbs')

const mongoose = require('mongoose')

const bodyParser = require("body-parser")




//Setup 

const app = express()

app.set('views', __dirname+"/views"); // to put the views folder as global without having to type views/file.hbs 

app.use(express.static("public")) // to put the public folder as global without having to type public/file 

app.set('view engine', "hbs") //to use handle bars

app.use(bodyParser.urlencoded({extended:true})) // it will alow us to the body inside the REQ !! important so we can do a FORM and send it things 

hbs.registerPartials(__dirname + "/views/partials") // it will allow us to create a block of code to use it as much as we can, similar to components in React 

//connection to database or mongodb
    //127.0.0.1 = momngodb 
mongoose.connect("mongodb://localhost/recapDB")
.then(x=>console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
.catch(err => console.error('Error connecting to mongo', err))

//rutas!!

//here we are going to import the route and use it 

const indexRoutes = require('./routes/index')

const userRoutes = require('./routes/user.route')

//http://www.dylansexy.com/  <-- "/"
app.use("/", indexRoutes)

//http://www.dylansexy.com/user <-- "/user"
app.use("/user", userRoutes)





//server 

app.listen(3000, ()=>{
    console.log("Server is live!")
})


//2:24:37 

