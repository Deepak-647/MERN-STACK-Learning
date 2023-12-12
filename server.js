require("dotenv").config();
const express = require('express');
const app = express();
const authRoute = require('./routing/auth-routing')
const connectDb = require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./routing/contact-router")

app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);

app.use(errorMiddleware)

 const PORT = 5000;

 connectDb().then(()=>{
   app.listen(PORT,() => {
      console.log(`server is running at port: ${PORT}`)
   })
 })
 