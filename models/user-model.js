const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    idAdmin:{
        type:Boolean,  
        default:false
    }
})

//define the model or the collection name
const User = new mongoose.model('User',userSchema);

module.exports = User;