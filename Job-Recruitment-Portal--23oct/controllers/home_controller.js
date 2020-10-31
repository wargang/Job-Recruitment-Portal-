
const Post = require("../models/post");
const Job = require("../models/job");

const User = require("../models/user");
const Company = require("../models/company");
module.exports.home=async function(req,res){
   
        // console.log(req.cookies);
        // res.cookie('user_id',25);
        // Post.find({},function(err,posts){
        //     return res.render('home',{
        //         title: "Codecial|Home",
        //         posts: posts
        //    });
        // });

        // populate the user of each post
        if(!(req.user))
        {
            return res.render('home',{title:'Job Portal|Home'});
        }
        if(req.user.isuser==false)
        {
            let company=await Company.find({});
            return res.render('home',{
                title: "Codecial|Home",
                all_company: company
        });
        }
        let company=await Company.find({});
        let arr=[];
        for(j of req.user.subs)
        {
            let jobs= await Job.find({company:j}).populate('company').exec();
            for(a of jobs)
            arr.push(a);

        }
        return res.render('home',{
            title: "Codecial|Home",
            jobs: arr,
            all_company: company
    });

        //     User.find({},function(err,users){
                    
        //             Job.find({})
        //             .populate('company')
        //             .exec(function(err, jobs){
        //                 Company.find({}, function(err, company){
        //                     return res.render('home',{
        //                         title: "Codecial|Home",
        //                         jobs: jobs,
        //                         all_users: users,
        //                         all_company: company
        //                 });
        //                 });
                        
                    
        //     });
            
        // });

    
    
}