const router = require("express").Router()



// GET home page 
// req = request 
// res = response of the server 
// next = middlewear function that has to be completed to proceed if need. its like a filter if it completes the required step then you can continue 

//https://www.dylansexy.com/ 
router.get("/", (req,res, next)=>{
    // render will store everything in a variable called body  body="views/index"
    res.render("index")

})

//https://www.dylansexy.com/about 
router.get("/about", (req, res, next)=>{
    res.render("about")
})

//https://www.dylansexy.com/gato 
router.get("/gato", (req, res, next)=>{
    res.render("gato")
})








module.exports = router 
//export file