//import mongoose and bring Schema and model

const {Schema, model} = require("mongoose")


const userSchema = new Schema ({
    username: {
        type:String,
        required: true,
        unique: true
    },

    email: {
        type:String,
        required: true,
        unique: true
    },

    password: {
        type:String,
        require: true,
        uniqued: true
    }

},{timestamps:true})





module.exports = model("User", userSchema)