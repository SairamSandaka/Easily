export const auth = (req,res,next)=>{
    if(req.session.username){
        res.render('layout',{user:req.session.username});
    }
    else{
        res.render('layout',{user:"Recruiter12"});
    }
}