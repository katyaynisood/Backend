require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000//listen

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("myACC")
})
const port =process.env.PORT || 3000;//this line is imp for it to run in evry host

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})