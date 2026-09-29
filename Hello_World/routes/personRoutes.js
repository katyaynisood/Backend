const express=require('express');
const router=express.Router();//express ka function router naam ke variable me store krle 
const Person = require('../models/person');
router.post('/',async (req,res)=>{
    const data=req.body;
    const newPerson =new Person(data);
    //this is getting saved 
    // newPerson.name=data.name;
    // newPerson.work=data.work;
    // newPerson.age=data.age;
    try{
        const saveperson=await newPerson.save();//agr iss line me error aya toh catch me chla jayega
        console.log('Data Saved');
        res.status(200).json(saveperson);
    }
    catch(err){
        console.log('Error',err);
        res.status(500).json({error:'Internal Server Error'});
    }

})
router.get('/',async (req,res)=>{
    try{
        const data=await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal error'})
    }
})
router.get('/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType;//now see what is the work type of url parameter
        if(workType=='chef' || workType=='manager' || workType=='waiter'){
            const response=await Person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);  
        }else{
            res.status(404).json({error:'Invalid work type'});
        }
    }catch(err){ 
        console.log('Error occured');
        res.status(500).json({error:'Internal error'});
    }


})
//UPDATE KRNA
router.put('/:id',async(req,res)=>{
    try{
        const personid=req.params.id;//url se id mil jayegi jisko update krna hai
        const updatedPerson=req.body;//yha se vo mil jayega jo hum postman me body me daal rhe hai data
        const response=await Person.findByIdAndUpdate(personid,updatedPerson,{
            new:true,//response updated document ko return krega
            runValidators:true//schema wali cheeze check hogi
        })
        if(!response){
            return res.status(404).json({error:'Person not found'});

        }
        console.log('data updated');
        res.status(200).json(response);


    }catch(err){
        console.log('Error')
        res.status(500).json({error:'Internal server error'})
    }
})
//DELETE SOME SPECIFIC DATA
router.delete('/:id',async (req,res)=>{
    try{
        const personid=req.params.id;
        const response=await Person.findByIdAndDelete(personid);
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data deleted');
        res.status(200).json('person deleted successfully');
    }catch(err){
        console.log('Error');
        res.status(500).json({error:'Internal server error'});
    }
})
module.exports = router;