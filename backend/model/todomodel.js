const mongoose = require('mongoose');

const todoSchema = new mongooseSchema ({
        
        title:{
         type:String,
         required:true
        },
        description:{
        type:String,
        required:true
        },
        completed:{
        type:boolean,
        default:false
        }
   
});



module.exports = model;