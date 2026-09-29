//import mongodb
const mongoose=require('mongoose');
const mongoURL='mongodb://localhost:27017/mydata';

//setup mongoDB connection
mongoose.connect(mongoURL)

//get the default connection
//mongoose maintains a default connection object repersenting the mongoDB connection
const db=mongoose.connection;

//define event listenser for database connection
db.on('connected',()=>{
    console.log('Connected to MongoDB server');
})
db.on('error',(err)=>{
    console.log('error in MongoDB server ',err);
})
db.on('disconnected',()=>{
    console.log('disconnected to MongoDB server');
})

//export database connection
module.exports=db;