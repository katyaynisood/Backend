// console.log("server file is running ");
// (function(){
//     console.log("hello");
// })();
  



 



// var fs=require('fs');
// var os=require('os');

// var user=os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greet.txt','hi'+user.username+'\n',()=>console.log('hi katyayni file created'))






// //how to import files
// const notes=require('./notes.js');
// var age=notes.age;
// console.log(age);
// var res=notes.addnum(age,1);
// console.log(res);




// //lodash
// var _=require('lodash');
// var data=["person","person",1,1];
// var bhondu="kartik"
// console.log(_.uniq(data));
// console.log(_.isString(bhondu));




const express=require('express')
const app=express();//app is map of express
 const db=require('./db');

 
app.get('/',function(req,res){
    res.send('Hello World');
})
// app.get('/id',function(req,res){
//     res.send('101 ');
// }) 
// app.get('/id2',function(req,res){
//     res.send('102 ');
// })   
// app.use(express.json());//to get data from the postman
// app.post("/user", (req, res) => {
//     console.log(req.body);

//     res.json(req.body);
// }); 


const bodyParser=require('body-parser');
app.use(bodyParser.json());//req.body


//Import the router files
const personRoutes=require('./routes/personRoutes'); 
const menuRoutes=require('./routes/menuRoutes');
//Use the routes
app.use('/person',personRoutes)
app.use('/menu',menuRoutes);

app.listen(3000,()=>{
    console.log("listening to server")
});