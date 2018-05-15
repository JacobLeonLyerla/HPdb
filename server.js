const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const GriffindorRouter = require('./Gryffindor/gryffindorRouter')
const HufflepuffRouter = require('./Hufflepuff/hufflepuffRouter')
const server = express();

server.use(express.json());
server.use(cors())


server.use('/gryffindor', GriffindorRouter)
server.use('/hufflepuff',HufflepuffRouter)
mongoose
.connect('mongodb://localhost/HarryPotterdb')
.then(response =>{
    console.log('Welcome Wizard')
})
.catch(err=>{
    console.log('That spell did not hit',err)
})

server.get('/',(req,res)=>{
    res.send('Lets fly!')
})




const port = process.env.PORT || 5000;
server
.listen(port,()=> console.log(`\n\n Portal ${port} summoned, be careful wizard.`))