const User = require('../models/user')

const verify = async (req, res, next)=>{
    try {
        const user = await User.findOne({name:req.body.name, designation:req.body.designation})
        if(user){
            return res.send(user._id)
        }
        next()
    } catch (error) {
        res.status(400).send()
    }
}

module.exports = verify