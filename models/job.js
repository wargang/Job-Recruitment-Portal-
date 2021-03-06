const mongoose=require('mongoose');
const jobSchema=new mongoose.Schema({
    title:{
        type :String,
        required :true
    },
    description: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        required: true
    },
    skills: [{
        type: String
    }],
    location: {
        type: String
    },
    education: {
        type: String
    },
    experience: {
        type: Number
    },
    baseSalary: {
        type: String
    },
    company: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    //include the ids of comments in an array

    applicants: [{
        
            type:mongoose.Schema.Types.ObjectId,
            ref: 'User'
        
        
    }]
},{
    timestamps:true
});

const Job = mongoose.model('Job',jobSchema);
module.exports=Job;