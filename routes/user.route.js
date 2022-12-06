const router = require("express").Router()

//i need the model where i am saving, so we are importing the Model User since i exported it 
//../ go back one level ../../ go back two levels
// ./ in the same level 
const User = require("../models/User.model")

router.get("/", (req,res,next)=>{
    //aqui estamos en la raiz de la ruta user
    //http://www.dylansexy.com/user/
    res.send("la raiz del user")
})

router.get("/signup", (req, res,next)=>{
    res.render("auth/signup")
})

router.post("/signup", (req, res, next)=>{
    //everything we send with a form in a POST will be send in the req.body
    console.log("que se esta mandando", req.body)
    //create or first user to our database 
    //1.- destructurar let / const {username, password, mail} = req.body
    //User.create({username, password, email}) //order doesnt matter from the User schema 

    //2.- user ....req.body (spread operator)
    //User.create({...req.body})

    //3.- add them to the object
    /*User.create({
        username: req.body.username, 
        password: req.body.password, 
        email: req.body.email})
    */

    User.create({...req.body}) //we are using the spread version 
    .then(newUser => { 
        //it will always be an object 
        res.render("success", newUser)
    })
    .catch(err=>{
        res.send("Error in creating")
    })

    // User.create({
    //     username: req.body.username, 
    //     password: req.body.password, 
    //     mail:     req.body.mail})
    // .then(newUser=>{
    //     res.render("success", {newUser})
    // })
    // .catch(err=>{
    //     res.send("Error in creating")
    // })     -This one didn't work, i have to get it to work- 

    
})












module.exports = router