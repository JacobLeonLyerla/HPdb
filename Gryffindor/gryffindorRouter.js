const express = require('express');
const Gryffindor = require('./gryffindor')
const router = express.Router();

router.get('/',(req,res)=>{
Gryffindor
.find()
.then(wizard=>{
    res.status(200).json(wizard)
})
.catch(hex=>{
    res.status(500).json({hex: "The collection of the brave wizards of Griffindor could not be obtained."})
})
})
router.post('/',(req,res)=>{
    const gryffindor = new Gryffindor(req.body)
    gryffindor
    .save()
    .then(wizard =>{
        res.status(201).json(wizard)
    }).catch(hex =>{
        res.status(500).json({Hex:"This Wizard could not be added check their status and try again."})
    })
})

module.exports = router

