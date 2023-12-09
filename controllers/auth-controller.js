// *----------------------
//* Controllers
// *----------------------

//? In an Express.js application, a "controller" refers to a part of your code that is responsible for handling the application's logic. Controllers are typically used to process incoming requests, interact with models (data sources), and send responses back to clients. They help organize your application by separating concerns and following the MVC (Model-View-Controller) design pattern.

// *-------------------
// Home Logic
// *-------------------

const home = async (req,res) => {
    try{
        res
        .status(200)
        .send("Welcome to Home page using Controllers");
    }catch(error){
console.log(error)
    }
    
}
const register = async (req,res) => {
    try{
        console.log(req.body)
        res
        .status(200)
        .json({message: req.body});
    }catch(error){
        console.log(error)
    }
    
}
module.exports = {home,register} 