const express = require('express')
const User = require('../models/user')
const Evaluation = require('../models/evaluation')
const form = require('../utils/evaluation_form')
const scales = require('../utils/scales')
const verify = require('../middleware/verify')
const router = new express.Router()

router.post('/user',verify,async (req, res)=>{

    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user._id)
    } catch (error) {
        res.status(400).send(error)
    }  
    
})

router.get('/user/scales/', async(req, res)=>{
    res.send(scales)
})

router.get('/user/:id/evaluation', async( req,res)=>{
    try {
        const evaluation = await Evaluation.findOne({id:req.params.id})

        if(!evaluation){
            res.send(form)
        }
        res.send(evaluation)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/user/:id/evaluation', async( req,res)=>{
    req.body.id = req.params.id
    const evaluation = new Evaluation(req.body)
    try {
        await evaluation.save()
        res.status(201).send(evaluation)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router