import {jobs , authenticateUser, registerUser } from "../model/usermodel.js"

export const fetchjobs = (req,res)=>{
        
        res.render('jobs',{avjobs:jobs});
    }
export const showdata = (req,res)=>{
    res.render()
}
export const loginuser = (req,res)=>{
    const {email,password} = req.body;
    console.log("login");
    console.log(req.body);
    if(authenticateUser({email,password})){
        res.redirect("/");
    }
    else{
        res.end("userNotFound")
    }
}
export const adduser = (req,res)=>{
    const {email,password} = req.body;
    console.log( registerUser({email,password}));
    res.render('login');
}

export const getdata = (req,res)=>{
    const id = req.params.id;

    const data = jobs.filter((job)=>{
        if(job.id==id){
            return job;
        }
    });
    console.log(id);
   
    console.log(data);
    res.render('portal',{jobdata:data});
}