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
    active:String,
    gender:String,
    species:String,
    height:String,
    hair_color:String,
    eye_color:String,
    skin_color:String,
    img:{
        type:String,
        default:"https://pre00.deviantart.net/d094/th/pre/f/2007/210/9/4/gryffindor_wallpaper_by_ibuki_san.jpg"
    },
    wikiaInfo:{
        type:String,
    },
    lore:String,


})

module.exports = mongoose.model('Gryffindor',Gryffindor)