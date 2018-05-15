const mongoose = require('mongoose');

const Hufflepuff = new mongoose.Schema({
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
    active:String,
    gender:String,
    species:String,
    height:String,
    hair_color:String,
    eye_color:String,
    skin_color:String,
    img:{
        type:String,
        default:"https://pre00.deviantart.net/ad55/th/pre/f/2007/158/d/8/hufflepuff_wall_by_ibuki_san.jpg"
    },
    wikiaInfo:{
        type:String,
    },
    lore:String,


})

module.exports = mongoose.model('Hufflepuff',Hufflepuff)