const express = require('express');
const Hufflepuff = require('./Hufflepuff')
const router = express.Router();

router.get('/',(req,res)=>{
Hufflepuff
.find()
.then(wizard=>{
    res.status(200).json(wizard)
})
.catch(hex=>{
    res.status(500).json({hex: "The collection of the loyal and true wizards of Hufflepuff could not be obtained."})
})
})
router.post('/',(req,res)=>{
    const hufflepuff = new Hufflepuff(req.body)
    hufflepuff
    .save()
    .then(wizard =>{
        res.status(201).json(wizard)
    }).catch(hex =>{
        res.status(500).json({Hex:"This Wizard could not be added check their status and try again."})
    })
})

module.exports = router

