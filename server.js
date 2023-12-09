const express = require('express');
const app = express();
const router = require('./routing/auth-routing')
const connectDb = require('./utils/db')

app.use(express.json());

app.use("/api/auth",router);

 const PORT = 5000;

 connectDb().then(()=>{
   app.listen(PORT,() => {
      console.log(`server is running at port: ${PORT}`)
   })
 })
 