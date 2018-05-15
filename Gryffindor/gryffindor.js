const mongoose = require('mongoose');

const Gryffindor = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
      },
    aliases:String,
    age:{
        type:Number,
        defualt: "Unknown"
    },
    DoB:String,
    place_of_birth:String,
    country:String,
    hogwarts_house:{
        type:String,
        required:true,
    },
    student:{
        type:Boolean,
        required:true,
    },
    graduated:{
        type:Boolean,
        required:true,  
    },
    expelled:Boolean,
    gender:String,
    species:String,
    height:String,
    hair_color:String,
    eye_color:String,
    skin_color:String,


})

module.exports = mongoose.model('Gryffindor',Gryffindor)