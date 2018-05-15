const express = require('express');
const Gryffindor = require('./gryffindor')
const router = express.Router();



router
  .route('/:id')
    .get((req, res) => {
        const {id} = req.params
    Gryffindor
    .findById(id)
    .then(wizard=>{
           res.status(202).json(wizard);
    })
    .catch(err=>{
        res.status(500).json({errorMessage: "The Gryffindors information could not be retrieved."})
    })
  })
  .delete((req, res) => {
    const {id} = req.params
    Gryffindor
    .findByIdAndRemove(id)
    .then(wizard=>{
        res.status(204).end()
    })
  })
  .put((req, res) => {
    const {id} = req.params
    const update = req.body;
    const options ={
      new:true,
    }
    Gryffindor
    .findByIdAndUpdate(id,update, options)
    .then(wizard=>{
      res.status(200).json(wizard)
        })
  });

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

