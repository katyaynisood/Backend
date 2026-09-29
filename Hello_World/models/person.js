const mongoose =require('mongoose');

const personSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true//chahiye hi chahiye
    },
    age:{
        type:Number//ni enter krege no worries
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true//email entered show be diff from that of other documents
    }
});
//creating model names person
const Person=mongoose.model('Person',personSchema);
module.exports=Person;
