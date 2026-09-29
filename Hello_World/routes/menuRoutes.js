const express=require('express');
const router=express.Router();
const menuItem=require('../models/menuSchema');
//DATA DAALNA
router.post('/',async (req,res)=>{
    const data=req.body;
    const menuI=new menuItem(data);//menuItem is model ka name
    try{
        const saveitem=await menuI.save();
        console.log('Item Saved',data);
        res.status(200).json(data);
    }catch(err){
        console.log('error',err);
        res.status(500).json({error:'Internal Error(Item'})
    }
})
//DATA NIKALNA 
router.get('/',async(req,res)=>{
    try{
        const data=await menuItem.find();
        console.log('Item fetched',data);
        res.status(200).json(data);
    }catch(err){
        console.log('error');
        res.status(500).json({error:'Intenal server error'});
    }
})
//PARAMETERIZED URL SE DATA NIKALNA
router.get('/:tasteType',async (req,res)=>{
    try{
        const tasteType=req.params.tasteType;
        if(tasteType=='sour' || tasteType=='spicy' ||tasteType=='sweet'){
            const response=await menuItem.find({taste:tasteType});
            res.status(200).json(response);   
        }else{
            res.status(404).json({error:'Invalid type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

module.exports = router;