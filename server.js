var express = require('express');
var mongoose = require('mongoose');
var app = express();
const bodyparser=require('body-parser')
app.use(bodyparser.json())

app.get('/',(req,res)=>{
  res.send('welcome to succoin')
})

//qnea0donBwOJIvnN


const CONNECTION_PORT="mongodb+srv://admin:qnea0donBwOJIvnN@succoincluster.unzqjfp.mongodb.net/test"
const PORT=process.env.PORT || 8090;

mongoose
  .connect(CONNECTION_PORT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });