require("dotenv").config();
const express = require('express');
const cors = require("cors");
const app = express();
const authRoute = require('./routing/auth-routing')
const serviceRoute = require('./routing/service-router')
const connectDb = require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./routing/contact-router")

//handling cors policy issue
const corsOptions ={
  origin:["https://beyond-tech.netlify.app"],
  methods:["GET","POST","PUT","DELETE","PATCH","HEAD"],
  credentials :true,
}
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);

app.use(errorMiddleware)

 const PORT = 5000;

 connectDb().then(()=>{
   app.listen(PORT,() => {
      console.log(`server is running at port: ${PORT}`)
   })
 })
 
