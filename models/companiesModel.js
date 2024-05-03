const mongoose = require('mongoose');
const companiesSchema = new mongoose.Schema(
    {
        year:{
            type:Number,
            required:[true,'Please enter a year'],
        },
        status:{
            type:String,
            required:[true,'Please enter a status'],
        },
        title:{
            type:String,
            required:[true,'Please enter a title'],
        },
        cgpa:{
            type:String,
            required:[true,'Please enter a cgpa'],
        },
        package:{
            type:String,
            required:[true,'Please enter a package'],
        },
        intership:{
            type:String,
            required:[true,'Please enter a intership'],
        },
        EligibleBranches:{
            type:String,
            required:[true,'Please enter a EligibleBranches'],
        },
        OfferedStudents:{
            type:String,
            required:[true,'Please enter a OfferedStudents'],
        },
        JobLocation:{
            type:String,
            required:[true,'Please enter a JobLocation'],
        },
        JobProfile:{
            type:String,
            required:[true,'Please enter a JobProfile'],
        },
        JobDescription:{
            type:String,
            required:[true,'Please enter a JobDescription'],
        },
        process:{
            type:String,
            required:[true,'Please enter a process'],
        },
        companyWebsite:{
            type:String,
            required:[true,'Please enter a companyWebsite'],
        },
        archiveslink:{
            type:String,
            required:[true,'Please enter a archiveslink'],
        },
    },
    {
        timestamps:true,
    }
);
const Companies=mongoose.model('Companies',companiesSchema);
module.exports=Companies;