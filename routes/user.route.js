const router = require("express").Router()

router.get("/", (req,res,next)=>{
    //aqui estamos en la raiz de la ruta user
    //http://www.dylansexy.com/user/
    res.send("la raiz del user")
})

router.get("/signup", (req, res,next)=>{
    res.render("auth/signup")
})

router.get("/login", (req, res, next)=>{
    res.render("auth/login")
})














module.exports = router