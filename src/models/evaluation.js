const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    developer_skills:[
        {
            skill:{
                type: String,
                required: true,
                enum: ['coding skills','Troubleshooting skills','Quality Assuarance','Time Logging']
            },
            scale: {
                type: String,
                required: true,
                enum: ['Unsatisfactory','Needs Improvement','Meets Expectations','Above Expectations','Outstanding']
            },
            comment:String
        }

    ],
    Technical_skills:[
        {
            skill:{
                type: String,
                required: true,
                enum: ['Source Versioning - TFS','Source Versioning - GIT','C#','ASP.NET CORE','Ruby','Angular JS']
            },
            scale: {
                type: String,
                required: true,
                enum: ['Beginner','Intermediate','Proficient','Expert']
            },
            comment: String
        }
    ],
    id:{
        type: String,
        unique: true
    }

})

const Evaluation = mongoose.model('Evaluation',userSchema)

module.exports = Evaluation